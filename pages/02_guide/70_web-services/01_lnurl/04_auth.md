---
layout: guide
title: Auth
parent: LNURL
grand_parent: Web Services
description: LNURL is an open standard for communicating with a Lightning node through HTTP.
nav_order: 50
has_children: false
permalink: /guide/web-services/lnurl/auth
main_classes: -no-top-padding
---

{% include picture.html 
   image = "/assets/images/web-services/lnurl/auth.png"
   retina = "/assets/images/web-services/lnurl/auth@2x.png"
   mobile = "/assets/images/web-services/lnurl/auth-mobile.png"
   mobileRetina = "/assets/images/web-services/lnurl/auth-mobile@2x.png"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

# Authentication to a service using the client's mnemonic
###### LNURL-PAY

**LN primitives involved:**
- Wallet private keys (domain specific)

## An Example Flow
- [Spec docs](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-auth.md)
- [Explainer docs](https://xn--57h.bigsun.xyz/lnurl-auth.html)