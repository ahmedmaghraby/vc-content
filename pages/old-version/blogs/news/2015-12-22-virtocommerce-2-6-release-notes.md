---
author: VirtoCommerce
category: release
date: 2015-12-22 04:37
excerpt: We are excited to announce the 2.6 release of Virto Commerce. The primary focus of this release was the new Storefront application rewritten from scratch.
permalink: blog/virtocommerce-2-6-release-notes
tags: [20, announcements, ecommerce, features, release-notes]
title: "VirtoCommerce 2.6 Release Notes"
---
We are excited to announce the 2.6 release of Virto Commerce. The primary focus of this release was the new Storefront application rewritten from scratch. Commerce Manager got some cool features as well: asset management and more functional lists to name some. The most significant features are outlined below.

## New Storefront

The Storefront application was redesigned and rewritten from scratch. Main points to note:

* Partial payments using multiple payment methods
* Multi-store support
* More convenient checkout page (with responsive design, written completely in <a href="https://angularjs.org/" rel="nofollow">AngularJS</a>)
* Full page caching
* Liquid templating language and full <a href="https://themes.shopify.com/" rel="nofollow">Shopify themes</a> support
* Razor View Engine support

## Commerce Manager localization

Commerce Platform and all the Commerce modules were fully localized. All the translation resources are public and available in a dedicated git repository. Check the [localization guide](docs/vc2devguide/working-with-platform-manager/localization-implementation) for more information on managing the translations and localizing Commerce Manager to new languages. In case of your own module, study the [guide on localization implementation](docs/vc2devguide/working-with-platform-manager/localization-implementation).

![](assets/images/blog/2-6_localize.png)

Excerpt of the Virto Commerce localization data

User can change his UI language from user profile (Configuration -&gt; USER PROFILE) and the changes are applied immediately. Note that only English language is available by default.

## More functional lists

The lists in Commerce Manager now are much more functional as we’ve adapted <a href="http://ui-grid.info/" rel="nofollow">ui-grid</a> component for them. The aboriginal static html tables were replaced with a highly customizable lists. Some of the new cool features are:

* column visibility toggling
* column reordering and resizing
* automatic column generation from data
* column pinning
* sorting (even by multiple columns)
* pagination (on client or server side)

Furthermore, all your customizations are automatically and seamlessly saved in the browser (using <a href="https://en.wikipedia.org/wiki/Web_storage" rel="nofollow">Web Storage</a>).

![](assets/images/blog/2-6_1uigrid.png)

Assets list in Commerce Manager with list element selection and available actions column, context menu and pagination functionality.

## Asset management

Asset management functionality added as a full-fledged module in UI. Create folders and manage assets comfortably - directly in Commerce Manager.

![](assets/images/blog/2-6_2assets.png)

Asset list and new file upload dialog.

## View item images in a gallery

Now you can view images in more detail after they were added to the item. Just click “Gallery” in the toolbar while managing the images:

![](assets/images/blog/2-6_3gallery.png)

## Catalog database structure optimization

The underlying (database) data structure was optimized for Catalog module. This change had no functional changes in UI, but the overall performance was improved (especially when dealing with large amounts of data).

## New payment gateways

Support for 2 more — CyberSource and DIBS Account — payment gateways was added.

Accept card and alternate payments across all sales channels — mobile, web, point-of-sale, and call center — domestically and across the world using just one connection. The CyberSource gateway connects to approximately 100 acquirers and processors in over 190 countries and territories so you can process digital payments anytime, anywhere, in multiple currencies.

DIBS Account. Start accepting card and invoice payments with only one agreement with DIBS. DIBS Account combines payment gateway and acquiring services in one enabling you to accept online payments.

We have made it easy for you to accept the most popular payment methods in the Nordics: VISA, MasterCard and DIBS Invoice payments.

## Integrate using Azure Logic Apps

Create new integrations with VirtoCommerce Azure API App in Microsoft Azure. Check our recent article for more details.

## Integration with Amazon Marketplace

Facilitate and automate the stages of your business process for selling on Amazon.com using our new Amazon Merchant module. Our module relies on <a href="http://www.amazon.com/gp/help/customer/display.html?nodeId=201269090" rel="nofollow">Amazon Marketplace Web Service</a> and it’s currently available to Professional Selling Plan possessors only.