---
layout: guide
title: Intraledger
parent: Galoy
grand_parent: Web Services
description: All URLs following LNURL spec need to be encoded in the same way as BOLT11 invoices are.
nav_order: 40
has_children: false
permalink: /guide/web-services/galoy/intraledger
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

# Perform intraledger operations

These queries & mutations can be used to work with other users on the same Galoy instance. Users on an instance have wallets under their account that they can send/receive bitcoin to and from. These operations can be used to query details about a user's wallets and send to other users using their wallet details.

---

##### Queries/mutations (WIP))

- User
   - account default wallet id
   - update default wallet id
   - see all wallet ids

- Payments
  - intraLedgerPaymentSend
  - default wallet id from username
