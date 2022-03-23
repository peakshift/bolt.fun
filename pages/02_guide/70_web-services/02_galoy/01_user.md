---
layout: guide
title: User
parent: Galoy
grand_parent: Web Services
description: All URLs following LNURL spec need to be encoded in the same way as BOLT11 invoices are.
nav_order: 10
has_children: false
permalink: /guide/web-services/galoy/user
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/web-services/introduction.png"
   retina = "/assets/images/web-services/introduction@2x.png"
   mobile = "/assets/images/web-services/introduction-mobile.png"
   mobileRetina = "/assets/images/web-services/introduction-mobile@2x.png"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

# Perform user-management related operations

These queries & mutations are used to create accounts for new users or authenticate as existing ones. After successful login, there are then operations that can be done to fetch various types of information about the logged in user such as transaction history and wallet ids.

---

##### Queries/mutations

- **Login**

  Galoy instances currently use phone numbers and SMS codes (sent via twilio) to authenticate users. A user can first request an SMS phone code for a given phone number. If the user doesn't exist a new user is created. The user can then use the phone number and a received SMS code to receive a JWT token that can then be included as an authorization header in all subsequent requests.

  - Request SMS phone code for a given phone number
    ```gql
    mutation userRequestAuthCode($input: UserRequestAuthCodeInput!) {
        userRequestAuthCode(input: $input) {
            success
        }
    }
    ```
    ---

  - Login (or create new user) with a phone number and received SMS code
    ```gql
    mutation userLogin($input: UserLoginInput!) {
        userLogin(input: $input) {
            authToken
        }
    }
    ```

    _Variables:_
    ```json
    {
        "input": {
            "username": "Alice"
        }
    }
    ```

- **User info**

  A `me` query exists that can be used to fetch different details about an authenticated user's detaails and transactions. The following are selections from the `me` query that surface different subsets of data on the user. These can also optionally be combined into single requests.

  - Balances for all a user's wallets

    ```gql
    query me {
        me {
            defaultAccount {
                wallets {
                    walletCurrency
                    balance
                }
            }
        }
    }
    ```
    ---

  - Another user's current default wallet id given their username
    ```gql
    query userDefaultWalletId($username: Username!) {
      userDefaultWalletId(username: $username)
    }
    ```
    ---

  - The authenticated user's default wallet
    ```gql
    query accountDefaultWallet($username: Username!) {
      accountDefaultWallet(username: $username) {
          id
          walletCurrency
      }
    }
    ```
    ---

  - If unset, set a username for the authenticated user
    ```gql
    mutation setUsername($input: UserUpdateUsernameInput!) {
    userUpdateUsername(input:$input) {
      errors {
        message
      }
      user {
          username
      }
    }
  }
  ```
  ---

  - Paginated transactions for each of the authenticated user's wallet
    ```gql
    query transactionsListForContact($first: Int, $after: String) {
        me {
            defaultAccount {
                wallets {
                    walletCurrency
                    transactions(first: $first, after: $after) {
                        pageInfo {
                            hasNextPage
                        }
                        edges {
                            cursor
                            node {
                                __typename
                                id
                                settlementAmount
                                settlementFee
                                status
                                direction
                                settlementPrice {
                                    base
                                    offset
                                    # currencyUnit
                                    # formattedAmount
                                }
                                memo
                                createdAt
                                initiationVia {
                                    ... on InitiationViaOnChain {
                                        __typename
                                        address
                                    }
                                    ... on InitiationViaLn {
                                        __typename
                                        paymentHash
                                    }
                                    ... on InitiationViaIntraLedger {
                                        __typename
                                        counterPartyWalletId
                                        counterPartyUsername
                                    }
                                }
                                settlementVia {
                                    ... on SettlementViaOnChain {
                                        __typename
                                        transactionHash
                                    }
                                    ... on SettlementViaLn {
                                        __typename
                                        paymentSecret
                                        preImage
                                    }
                                    ... on SettlementViaIntraLedger {
                                        __typename
                                        counterPartyWalletId
                                        counterPartyUsername
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ```
