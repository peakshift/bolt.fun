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
- send and receive USD over Lightning

The API is available from any deployed Galoy instance at that instance's endpoint. A live [mainnet API explorer](https://studio.apollographql.com/public/galoy-hackathon/explorer?variant=current) is available for sending and receiving USD or BTC over Lightning and onchain. Checkout the [README](https://studio.apollographql.com/public/galoy-hackathon/home?variant=current) to get started. Request a JSON web token (providing access to $5 USD wallet and 5k BTC wallet) from the Galoy team by joining the #hackathon channel in [Galoy Slack](https://join.slack.com/t/galoymoney-workspace/shared_invite/zt-rvnhsdb5-72AZCD_jzw6_Q05aCs0SgA).

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
