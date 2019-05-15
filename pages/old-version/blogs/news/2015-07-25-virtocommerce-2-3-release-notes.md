---
author: VirtoCommerce
category: release
date: 2015-07-25 10:00
excerpt: The focus of this release was integration, import/export, performance and custom properties engine. 
permalink: blog/virtocommerce-2-3-release-notes
tags: [20, announcements, azure, ecommerce, enterprise-ecommerce, features, open-source, performance, platform]
title: "VirtoCommerce 2.3 Release Notes"
---
The focus of this release was integration, import/export, performance and custom properties engine.

Below are just some of the updates we made during last sprint, for more details you may refer to our github repository, there was more than **448 individual** **commits** in the past 3 weeks:

* **Catalog** - Default language, additional language and currency management system have been redesigned
* **Documentation** - new developer and user guides
* **Platform Export/Import** - allows migration of modules data between different Virto Commerce platform instances, provides import/export engine for custom modules
* **Dynamic properties** - platform allows to add new properties to entities at runtime
* **Avalara AvaTax integration module improvements** - avalara tax module is now officially certified and will become available on avalara.com official site
* **ShipStation integration module** - allows for order synchronization with <a href="http://www.shipstation.com/" rel="nofollow">ShipStation</a> to manage all your shipping needs
* **Shopify integration module** - easily import existing Products, Collections and Themes from Shopify to the Virto Commerce platform
* **Performance** - we greatly improved frontend site performance and included custom load tests as part of the solution

## Catalog

* Images support added to category
* Default language, additional language and currency management have been redesigned. In catalog and store details
* TaxType property added to category, item and store shipping method UI
* A quick link for TaxTypes dictionary management added everywhere it's used. Setting dictionary values management redesigned to support "quick link" to it.

## Documentation

* Updated ("custom content" feature removed): [http://virtocommerce.com/docs/vc2devguide/working-with-platform-manager/basic-functions/blade-toolbar](docs/vc2devguide/working-with-platform-manager/basic-functions/blade-toolbar)
* Developer guide: Using dynamic properties [http://virtocommerce.com/docs/vc2devguide/working-with-platform-manager/extending-functionality/using-dynamic-properties](docs/vc2devguide/working-with-platform-manager/extending-functionality/using-dynamic-properties)
* User guide: Managing dynamic properties [http://virtocommerce.com/docs/vc2userguide/configuration/managing-dynamic-properties](docs/vc2userguide/configuration/managing-dynamic-properties)

## Platform Export/Import

This functionality allows migration of modules data between different Virto Commerce platform instances.

![](assets/images/blog/vcscreenshot.png)

Platform export/import functionality frequently can be used for the following cases:

* Update data from “staging” to “production”
* Backup tasks
* Distribute predefined environments (example: apparel stores template, digital store etc.)
* Client environment troubleshooting (client can send to us system backup)

![](assets/images/blog/vcscreenshotv2-32.png)

![](assets/images/blog/vcscreenshotv2-3-4.png)

## Dynamic properties

Now the platform allows to add new properties to entities at runtime.

In the main menu click **Settings** then in the toolbar click **Dynamic properties**, select the entity type from the list and click **Add** in the toolbar.

![](assets/images/blog/vcscreenshotv2-3-5.png)

Enter the property name and select one of the supported value types:

* Short text
* Long text
* Integer
* Decimal
* Date/Time
* Boolean

There are a number of options which modify the behavior of the property:

* Required
* Multivalue
* Multilingual
* Dictionary

Also you can define the property name for each of the registered languages and for multilingual properties you can enter different values for each language when editing an object.

After the property is added to the entity type it will be available for entering a value for every object of this type.

![](assets/images/blog/vcscreenshotv2-3-6.png)

## Avalara AvaTax integration module improved

![](assets/images/blog/logo-tagline-extend-FF6600-@2x.png)

During this sprint we improved the AvaTax module to get certified by Avalara.

What’s been added and improved in the module:

* “Tax type” property added to product, shipment. That way products and shipments can get tax codes. It’s a dynamic dictionary, so missing tax codes can be added dynamically

![](assets/images/blog/untitled_j.png)

* Address validation in customer address blade added. Address validation is more like a check if address is valid, though address still can be saved even not valid by Avalara service.

![](assets/images/blog/vcscreenshotv2-3-8validatelogo.png)

* Address validation can be disabled or enabled from settings.

![](assets/images/blog/vcscreenshotv2-3-validateaddresslogo.png)

* Partial returns of order initiates tax recalculation, so “Return invoice” of items returned generated in Avalara.
* Order cancellation initiates tax document void in Avalara.
* Logs added and improved.
* Tax configuration and setup documentation added - [link](docs/vc2devguide/extending-commerce/creating-new-tax-provider).

## ShipStation integration module

It allows for order synchronization with <a href="http://www.shipstation.com/" rel="nofollow">ShipStation</a>. That way new orders with shipments made in VirtoCommerce will become available in ShipStation admin and changes of shipment status will be synced with Virto Commerce platform store. For more details read in our [documentation](docs/vc2devguide/extending-commerce/creating-new-shipping-method)</a>.

## Shopify integration module

![](assets/images/blog/2010_6_23_Shopify-Green_256x256.jpg)

That module allows you to easily import existing Products,Collections and Themes from Shopify to the Virto Commerce platform.

![](assets/images/blog/vcscreenshotv2-3-shopifyintegration2.png)

![](assets/images/blog/vcscreenshotv2-3-shopifyimport.png)
