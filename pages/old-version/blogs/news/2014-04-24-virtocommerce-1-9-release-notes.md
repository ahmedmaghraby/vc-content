---
author: VirtoCommerce
category: release
date: 2014-04-24 00:40
excerpt: This release focus was on performance and technology updates as well as some smaller enhancements. 
permalink: blog/virtocommerce-1-9-release-notes
tags: [announcements, ecommerce, entityframework, full page caching, html5, localization, paypal]
title: "Virto Commerce 1.9 Release"
---
This release focus was on performance and technology updates as well as some smaller enhancements.

Here is the list of new features:

* **Entity Framework 6** – migrated to the latest Entity Framework version which improves migrations, performance and extensibility
* **Full Page Output Caching** – introduced caching together with donut caching functionality, our test servers showed 200 RPS performance with under a second response times
* **Promotion usage reservations** – a combination of services and business logic to enable advanced reservation scenarios
* **PayPal payment gateway** – implemented PayPal Express checkout functionality
* **Admin User Filters** – allows filtering users by types in Commerce Manager
* **More Cart Promotion conditions** – can now create promotions that target exact row total, subtotal, item code and many more
* **Other improvements** – from bug fixes to deployment script improvements

## What’s next?

We currently working on the following features:

* Improved logging and troubleshooting scenarios
* New deployment and configuration guide for both on-premise and cloud
* Moving to MVC 5.1
* New catalog export functionality
* Localization of Commerce Manager
* Web based Admin/Commerce Manager
* Export to CSV implementation for catalog and other modules
* Update to Elastic Search
* Programmable promotions
* Multi channel features (eBay, Amazon integrations)
* Additional European payment gateways integrations
* We also helping our customers launch several [B2B](https://virtocommerce.com/b2b-ecommerce-platform) and B2C sites that will allow us to bring more features to a product

Let us know at [http://help.virtocommerce.com/support/discussions/forums/264127](http://help.virtocommerce.com/support/discussions/forums/264127) if you’d like certain feature to be included in our roadmap.

## Promotion reservation

Promotion reservation has been implemented. This feature allows promotions to be configured with Allow limit (total allowed usages), Limit per customer and exclusivity policy. When promotion is applied in shopping cart, the record with status reserved is added to PromotionUsage table. The reservations are automatically removed by system job after configured expirationtimeout.

![](assets/images/blog/clip_image002d.jpg)

![](assets/images/blog/clip_image004d.jpg)

![](assets/images/blog/clip_image006d.jpg)

## PayPal express checkout

A new PayPal payment gateway is available for express checkout. This allows for quick checkout without filling addresses or shipping method. PayPal can also be selected as regular payment method in normal checkout flow, by selecting address and shipping method. This information then is sent to PayPal.

![](assets/images/blog/clip_image008d.jpg)

![](assets/images/blog/clip_image010d.jpg)

PayPal payment gateway can be configured in commerce manager as all other payments. For more information about PayPal configuration check this link <a href="https://github.com/paypal/sdk-core-dotnet/wiki/SDK-Configuration-Parameters" rel="nofollow">https://github.com/paypal/sdk-core-dotnet/wiki/SDK-Configuration-Parameters</a>.

![](assets/images/blog/clip_image012d.jpg)

![](assets/images/blog/clip_image014d.jpg)

![](assets/images/blog/clip_image016d.jpg)
