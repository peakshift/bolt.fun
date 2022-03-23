---
layout: guide
title: Lightning
parent: Galoy
grand_parent: Web Services
description: All URLs following LNURL spec need to be encoded in the same way as BOLT11 invoices are.
nav_order: 20
has_children: false
permalink: /guide/web-services/galoy/lightning
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

# Perform operations over the Lightning Network

These queries & mutations can be used to send and receive payments from any other Lightning Network enabled wallet on the Bitcoin network. The operations are generally divided into "with amount" and "no amount" operations.

---

##### Queries/mutations

- **Invoices**

  An authenticated user can create both "with amount" and "no amount" invoices to receive funds over lightning against. An unauthenticated user (anyone really) can create invoices on behalf of other users on the instance.

  - Create "with amount" invoice for authenticated user
    ```gql
    mutation lnInvoiceCreateInput($input: LnInvoiceCreateInput!) {
      lnInvoiceCreate(input: $input) {
        invoice {
          paymentRequest
          paymentHash
          paymentSecret
          satoshis
        }
        errors {
          message
        }
      }
    }
    ```
    _Variables:_
    ```json
    {
      "input": {
          "walletId": "<walletId>",
          "amount": <number>,
          "memo": "<memo>"
      }
    }
    ```
    ---

  - Create "no amount" invoice for authenticated user
    ```gql
    mutation lnNoAmountInvoiceCreate($input: LnNoAmountInvoiceCreateInput!) {
      lnNoAmountInvoiceCreate(input: $input) {
        invoice {
          paymentRequest
          paymentHash
          paymentSecret
        }
        errors {
          message
        }
      }
    }
    ```
    _Variables:_
    ```json
    {
        "input": {
            "walletId": "{{walletId}}",
            "memo": "Test"
        }
    }
    ```
    ---

  - Create "with amount" invoice on behalf of another user. The user would 
need to query the target user's "default walletId" to include.
    ```gql
    mutation lnInvoiceCreateOnBehalfOfRecipient($input: LnInvoiceCreateOnBehalfOfRecipientInput!) {
      lnInvoiceCreateOnBehalfOfRecipient(input: $input) {
        errors {
          message
        }
        invoice {
          paymentRequest
          paymentHash
          paymentSecret
        }
      }
    }
    ```
    _Variables:_
    ```json
    {
      "input": {
        "amount": 10,
        "memo": "<memo>",
        "recipientWalletId": "<walletId>"
      }
    }
    ```
    ---

  - Create "no amount" invoice on behalf of another user. The user would need to query the target user's "default walletId" to include.
    ```gql
    mutation lnNoAmountInvoiceCreateOnBehalfOfRecipient($input: LnNoAmountInvoiceCreateOnBehalfOfRecipientInput!) {
      lnNoAmountInvoiceCreateOnBehalfOfRecipient(input: $input) {
        errors {
          message
        }
        invoice {
          paymentRequest
          paymentHash
          paymentSecret
        }
      }
    }
    ```
    _Variables:_
    ```json
    {
      "input": {
        "memo": "memo",
        "recipientWalletId": "<walletId>"
      }
    }
    ```
    ---

- **Payments**

  An authenticated user can use the following mutations to query the fees for a given invoice and to also pay the invoice. Both "with amount" and "no amount" invoice are supoported.

  - Probe fee for a "with amount" invoice
    ```gql
    mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {
      lnInvoiceFeeProbe(input: $input) {
        errors {
          message
        }
        amount
      }
    }
    ```
    _Variables:_
    ```json
    {
      "input": {
        "paymentRequest": "<payment request>",
        "walletId": "<walletId>"
      }
    }
    ```
    ---

  - Pay a "with amount" invoice from user's authenticated balance
    ```gql
    mutation lnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
      lnInvoicePaymentSend(input:$input) {
        status
        errors {
          message
        }
      }
    }
    ```
    _Variables:_
    ```json
    {
        "input": {
            "walletId": "<walletId>",
            "paymentRequest": "<payment request>",
            "memo": "<memo>"
        }
    }
    ```
    ---

  - Probe fee for a "no amount" invoice
    ```gql
    mutation LnNoAmountInvoiceFeeProbe($input: LnNoAmountInvoiceFeeProbeInput!) {
      lnNoAmountInvoiceFeeProbe(input: $input) {
        errors {
          message
        }
        amount
      }
    }
    ```
    _Variables:_
    ```json
    {
        "input": {
            "paymentRequest": "<payment request>",
            "amount": <amount>,
            "walletId": "<walletId>"
        }
    }
    ```
    ---

  - Pay a "no amount" invoice from user's authenticated balance
    ```gql
    mutation lnNoAmountInvoicePaymentSend($input: LnNoAmountInvoicePaymentInput!) {
      lnNoAmountInvoicePaymentSend(input:$input) {
        status
        errors {
            message
        }
      }
    }
    ```
    _Variables:_
    ```json
    {
        "input": {
            "walletId": "<walletId>",
            "paymentRequest": "<payment request>",
            "amount": <amount>,
            "memo": "<memo>"
        }
    }
    ```
