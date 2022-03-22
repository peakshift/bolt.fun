---
layout: guide
title: Galoy
parent: Web Services
description: LNURL is an open standard for communicating with a Lightning node through HTTP.
nav_order: 20
has_children: true
permalink: /guide/web-services/galoy
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

## GraphQL API for Onchain/Lightning via User Accounts

The Galoy API provides access to onchain and lightning network payments/receipts via user accounts on an internal accounting system. As an authenticated user a web service can do the following on a user's behalf:
- generate lightning invoices to receive payments against
- pay lightning invoices from a user balance
- generate onchain addresses to receive payments
- pay to an onchain address
- pay to another user on the same galoy instance

The API is available from any deployed Galoy instance at that instance's endpoint. You can play with the offical Galoy testnet instance via a playground setup at: [api.staging.galoy.io/graphql](https://api.staging.galoy.io/graphql)


---

### [User]({{ "/guide/web-services/galoy/user" }})
Queries and mutations for authenticating as and getting information for a given user account.

---

### [Lightning]({{ "/guide/web-services/galoy/lightning" }})
Queries and mutations for sending and receiving over the Lightning Network.

---

### [On-chain]({{ "/guide/web-services/galoy/onchain" }})
Queries and mutations for sending and receiving on-chain transactions.

---

### [Intraledger]({{ "/guide/web-services/galoy/intraledger" }})
Queries and mutation for interacting with other users on the same instance.

---

### [USD (In Development)]({{ "/guide/web-services/galoy/usd" }})
Queries and mutation for working with an internal USD balance.
