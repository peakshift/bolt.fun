---
layout: guide
title: USD (In Development)
parent: Galoy
grand_parent: Web Services
description: All URLs following LNURL spec need to be encoded in the same way as BOLT11 invoices are.
nav_order: 50
has_children: false
permalink: /guide/web-services/galoy/usd
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

# Use Lightning From A USD Stable-Balance

Galoy is currently working on new USD functionality to allow users to store their BTC stably as a USD local balance. This is done by using an internal dealer service to hedge any bitcoin a user receives to their USD wallet. Users can send payments via any lightning invoice to any Lighting Network wallet using their USD wallet.

Hear Galoy CEO Nicolas Burtey discuss this functionality on [Stephan Livera Podcast](https://stephanlivera.com/episode/346/). 

These queries & mutations would mirror the Lightning ones, and they are also generally divided into "with amount" and "no amount" operations.


- Receive
   - usd invoice create
   - no amount invoice create

- Payments
  - invoice payment send
  - usd no amount invoice send

Galoy published an [API explorer](https://studio.apollographql.com/public/galoy-hackathon/explorer?variant=current) for developer experimentation. View the [README](https://studio.apollographql.com/public/galoy-hackathon/home?variant=current). 
