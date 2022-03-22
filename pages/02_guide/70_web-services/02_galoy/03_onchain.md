---
layout: guide
title: On-chain
parent: Galoy
grand_parent: Web Services
description: All URLs following LNURL spec need to be encoded in the same way as BOLT11 invoices are.
nav_order: 30
has_children: false
permalink: /guide/web-services/galoy/onchain
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

# Perform onchain operations

These queries & mutations can be used to work with onchain addresses and payments on the Bitcoin network. By default the system generates bech32 (segwit v0) addresses for the user, but users can send to any bitcoin address format.

---

##### Queries/mutations (WIP))

- Addresses
  - current address
  - create new address

- Payments
  - onchain tx fee
  - onchain payment send
