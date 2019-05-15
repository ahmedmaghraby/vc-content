---
category: Release
date: '2016-09-27'
published: true
excerpt: We are happy to announce  the new VirtoCommerce 'September 2016' release. The main changes that we implemented were aimed at making VirtoCommerce more extensible and stable.
tags: [announcements]
title: 'September 2016 release notes'
permalink: blog/dandelion-release-notes
---
We are happy to announce the new VirtoCommerce 'September 2016' release. The main changes that we implemented were aimed at making VirtoCommerce more extensible and stable.
### Platform
* AbstractTypeFactory now almost all domain types will be constructed via this static class, due to this it is possible to override any of domain types such as CustomerOrder or Cart by you own types.
![abstract-type-factory.png](assets/images/blog/abstract-type-factory.png)

* MetaForm control for constructing forms dynamically from given metadata.
![meta-form.png](assets/images/blog/meta-form.png)
[Read more about VC metaform](http://docs.virtocommerce.com/display/vc2devguide/Metaform)

### Customer Order
* Customer Order is now freely extendable both in backend and IU. New properties can be added to Order and any order operation without any modification to existing Orders module source code. Just create new module, derive new class from existing (e.g., CustomerOder) or add new entities (deriving from OrderOperation). Check our new <a href="https://github.com/VirtoCommerce/vc-samples/tree/master/OrderModule2" rel="nofollow">sample "OrderModule2"</a> for such customization details.
* All Order management UI properties in Manager are registered and loaded dynamically. The properties collection is accessible and manageable from any module!
* Totals calculation updated
* Advanced Order filtering in UI

![filter.PNG](assets/images/blog/filter.PNG)

### JavaScript Shopping Cart module
Storefront or Mobile application are only ones of your possible sales channels. Right now VirtoCommerce makes it easy to add ecommerce functionality to share and sell your products on any website.

![vcsalechannels](https://cloud.githubusercontent.com/assets/16013311/18511407/d76a3c14-7a83-11e6-9c07-c09c1c7f0289.PNG)

You have designed an awesome blog with Wordpress or other platform, and now you can start making money by adding easy-to-use VirtoCommerce JavaScriptShoppingCart. It works by offering a small piece of code, which can be implemented on your site to turn any element into a Buy button.

<a href="https://github.com/VirtoCommerce/vc-module-javascript-shoppingcart" rel="nofollow">JavaScript shopping cart Github project</a>

### Client generation with Autorest
We've switched the C# clients generation tool to Autorest. This simplified code management a lot:

* No more complicated client projects generation 
* No more awkward packages maintenance on NuGet
* New C# client generation takes seconds, not hours!
* Each referenced client package in StoreFront project was replaced with Autorest generated single C# class:

![generated API client classes](assets/images/blog/apiClients.PNG)

[How to generate API by using Microsoft Autorest](docs/vc2devguide/development-scenarios/how-to-generate-module-api-c-sharp-client-using-autorest)

### Add support for ASP.NET bundles to Storefront
![storefront-bundles.png](assets/images/blog/storefront-bundles.png)
[How to enable ASP.NET Bundles in storefront](docs/vc2devguide/working-with-storefront/bundles)

### Updated search modules
The following updates were made to search modules:

* Support for Elastic Search 2.x
* Migrated to Aggregations from depreciated Facets feature
* New NEST based Elastic Search provider
* Fixed ranges filter
* Added extensibility for indexing and search functions
* Implemened category indexor and search
* New Search API module that contains all the domain search logic