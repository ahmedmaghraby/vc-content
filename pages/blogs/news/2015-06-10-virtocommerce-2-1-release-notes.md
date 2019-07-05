---
author: VirtoCommerce
category: release
date: 2015-06-10 22:07
excerpt: For the 2.1 release we focused on making the experience of creating a new store easier and quicker.
permalink: blog/virtocommerce-2-1-release-notes
tags: [20, announcements, aspnet, azure, cms, dashboards, ecommerce, ecommerce-permissions, enterprise-ecommerce, features, microsoft-cloud, open-source, platform]
title: "Virto Commerce 2.1 Release Notes"
---
For the 2.1 release we focused on making the experience of creating a new store easier and quicker. There is also much more documentation now, including complete a <a href="https://virtocommerce.com/guides/style-guide" target="_blank">platform style guide</a>.

You can see the latest demo as well as download our source code at: <a href="https://virtocommerce.com/try-now" target="_blank">https://virtocommerce.com/try-now</a>.

Here is the list of new features and improvements in 2.1:

* **Catalog Import &amp; Export** – improvements to enable importing data from other e-commerce platforms
* **Shipping Methods** – documentation and improved implementation to support advanced shipping gateways
* **Dashboards** – unified widget management engine
* **Toolbar Extensibility** – add buttons and functions to any toolbar
* **Security Role Management** – edit and save custom dashboards
* **Security and API Management** - added simple API access type to enable integration with zapier and other similar services
* **Dynamic Conditions and Price List Assignments** - added dynamic conditions including GEO location attributes
* **Content Publishing** - added support for quickly adding dynamic content placeholders in frontend site themes
* **Frontend** - improvements to payment &amp; shipping options display, added price filters, custom error pages and much more
* <a href="https://virtocommerce.com/guides/style-guide" target="_blank">Platform Style Guide</a>
* [Creating Shipping Gateways](docs/vc2devguide/extending-commerce/creating-new-shipping-method)

## Catalog  Export &amp; Import functionality

Added ability to export and import catalog categories, products, prices, inventories to and from CSV files. Added extension point to enable additional types of support for import/export. Now install new modules for additional functionality.

![](assets/images/blog/untitled_d.png)

## Shipping methods support

Shipping Methods - they are the carriers and services used to send your products and are also used to evaluate shipping rates and tracking customers' parcels.

We added the ability to define new shipping methods and integrate them into the system. After a new shipping method is installed, you can configure it individually for each store in the system and also specify the display order in the checkout page.

![](assets/images/blog/untitled_e.png)

## Dashboard

Dashboard is updated to use a unified widget management engine. Now any module can register custom widgets to it just like to any other widget container in the Virto Commerce Platform.

![](assets/images/blog/base64791695cb45652864.png)

Widgets displaying real catalog and marketing data have been added. They act as shortcuts to other blades. Click any widget to navigate to catalogs or promotions respectively. This functionality will be extended more in the next sprint.

## Toolbar extensibility

Toolbar extension point was added. Now any module can register custom commands to a toolbar on any blade. Furthermore, the toolbar extensibility is not limited to commands only. Anything can be added to “custom content area” on the right blade’s side. This is the place for switches, flags, progress indicators, etc.

![](assets/images/blog/base64cb6781a45e9be11.png)

In the above toolbar, extensibility sample 2, additional commands and a switch were added to “Content items” blade.

## Security Role management

Security permissions were grouped to provide more convenient role management. Grouping is done “as needed”, meaning that any module can register permissions to any existing group or create new ones where appropriate. It allows for each module to be customized and assigned specific permissions that then can be utilized by a system administrator.

![](assets/images/blog/base64c9143a64b579a9a8.png)

Grouped permissions in role management UI.

## Security User API keys management

Added simple API keys to use for integration with other systems, like Zapier, Zendesk etc. User can generate API key and use it for API calls.

API keys management updated to support multiple keys (Hmac, simple). They can be active/disabled, named.

## Dynamic conditions in pricelist assignments

Placed price for a shopper depends on the pricelist being applied. The pricelist itself is bound to a specific catalog by “pricelist assignment”. We’ve added dynamic conditions for refining when and which pricelist should be assigned.

![](assets/images/blog/base64e52bc30758dd10ac.png)

Pricelist assignment condition management sample.

## Dynamic conditions in content publishing

Dynamic content, published in StoreFront, allows for increased accuracy and personalization. We’ve added dynamic conditions for refining when and which specific content should be provided to the shopper.

![](assets/images/blog/base64fcc0d1bb7fc6de49.png)

Dynamic content publishing condition management sample.

## Payment Methods Supports

We update the user interface to work with payment methods in the Commerce Manager store details blade.

![](assets/images/blog/untitled_f.png)

It is also possible to specify payment gateway configuration parameters per store to allow for multi vendor functionality.

![](assets/images/blog/untitled_g.png)

## Storefront

Shipping and payment methods are now retrieved using web api service, payment can be performed with PayPal or Klarna account.

![](assets/images/blog/untitled_h.png)

Custom 404 page with original url, HTTP response 404.

![](assets/images/blog/untitled_i.png)

## Documentation

We put a lot of effort into documentation. It is still under development but there are many new and improved documents already.

Also some additional video tutorials have been added to make it easier to learn more about Virto Commerce - <a href="https://www.youtube.com/channel/UC4Mu_zoDThg2jvexT0py12w" rel="nofollow">YouTube Virto Commerce Channel</a>.
