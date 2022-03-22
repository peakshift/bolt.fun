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

##### Queries/mutations (WIP))

- Login
  - request phone code
  - login

- Me
  - balance
  - transactions
  - user default wallet id
  - account default wallet
  - account wallets
  - set username
  - contacts
  - example, our mobile app main query
