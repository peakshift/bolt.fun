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

##### Queries/mutations (WIP))

- Invoices
  - invoice create
  - no amount invoice create
  - invoice behalf create
  - no amount invoice behalf create

- Payments
  - fee probe
  - payment send
  - no amount fee probe
  - no amount payment send
