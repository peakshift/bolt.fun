---
layout: guide
title: Web Services
description: Communicating with a Lightning Node.
nav_order: 70
has_children: true
permalink: /guide/web-services
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

# Web Services

Typically you would interact with a Lightning Network and Bitcoin node directly through some RPC or REST API. For web developers looking to build services on top of Bitcoin and Lightning an HTTP Service can be much simpler to interact with than an RPC interface. Not to mention if you want, the web service can also abstract multiple funding sources/implementations so you can switch between LND, c-lightning, eclair without changes to the client's code base.

---

### [LNURL - API to automate node operations]({{ "/guide/web-services/lnurl" | relative_url }})
We dive into the withdraw, pay, auth, and channel flows of this open standard for clients to communicate with a Lightning node through HTTP.