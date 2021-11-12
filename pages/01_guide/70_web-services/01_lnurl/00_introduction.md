---
layout: guide
title: LNURL
parent: Web Services
description: LNURL is an open standard for communicating with a Lightning node through HTTP.
nav_order: 10
has_children: true
permalink: /guide/web-services/lnurl
main_classes: -no-top-padding
---

{% include picture.html 
   image = "/assets/images/web-services/lnurl/introduction.png"
   retina = "/assets/images/web-services/lnurl/introduction@2x.png"
   mobile = "/assets/images/web-services/lnurl/introduction-mobile.png"
   mobileRetina = "/assets/images/web-services/lnurl/introduction-mobile@2x.png"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

# API to automate node operations

LNURL allows web services to use Lightning Network functionality in their API endpoints that clients who have implemented one or more of the various flows can interact with autonomously. The client can be a wallet application or even another web service.

Several "Flows" are currently part of the LNURL specifications. They are; Pay, Withdraw, Channel, and Auth. These Flows automate some otherwise manual steps for certain Lightning Network-based operations and standardize the HTTP request and responses.

---

### [URLs as Lightning invoices (bech32)]({{ "/guide/web-services/lnurl/encoding" }})
Why URLs are encoded in this way.

---

### [Pay]({{ "/guide/web-services/lnurl/pay" }})
API for a service to generate invoices given some parameters.

---

### [Withdraw]({{ "/guide/web-services/lnurl/withdraw" }})
API to automate the withdrawal of funds from a service that has been allocated to the requesting client.

---

### [Channel]({{ "/guide/web-services/lnurl/channel" }})
API to request the creation of incoming channels from a service.

---

### [Auth]({{ "/guide/web-services/lnurl/auth" }}) (coming soon)
Client authenticating to a service using their mnemonic

---

<!--
TODO

### [Playground](https://www.oauth.com/playground/device-code.html)
Progressively implement flows a la this playground example

-->