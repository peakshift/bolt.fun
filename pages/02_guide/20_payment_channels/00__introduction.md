---
layout: guide
title: Payment Channels
# parent: Guide
description: Diving into the user experience of moving Bitcoin
nav_order: 20
has_children: false
permalink: /guide/payment-channels
main_classes: -no-top-padding
---

{% include picture.html 
   image = "/assets/images/payment-channels/introduction.jpg"
   retina = "/assets/images/payment-channels/introduction@2x.jpg"
   mobile = "/assets/images/payment-channels/introduction-mobile.jpg"
   mobileRetina = "/assets/images/payment-channels/introduction-mobile@2x.jpg"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

# Payment Channels

If two parties want to make payments between themselves often, they can lock up some funds together in an on-chain transaction. Then they are able to bypass recording their subsequent payments with one another on-chain, by instead keeping track of each of their bitcoin balances in Lightning.

This is known as a payment channel, Lightning is essentially a network of payment channels which a sender’s payment can be routed through to reach any other beneficiary.

---

### [Submarine Swap]({{ "/guide/payment-channels/submarine-swaps" }})
Method to send funds from an on-chain address directly into an open payment channel and vice versa.

---

### Channel factories (WIP)
A channel factory is a non-custodial, multi participatory system that contains channels. Channel factories allow users to open unlimited channels within their group.

---

### Hosted channels (WIP)
Hosted channels (HC) is an extension to LN protocol which allows two LN nodes to establish a new type of channel between them which is intentionally not backed on chain[^1].

[1]: https://github.com/btcontract/hosted-channels-rfc/blob/master/README.md (hosted-channels-rfc)

