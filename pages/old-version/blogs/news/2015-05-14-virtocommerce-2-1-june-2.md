---
author: VirtoCommerce
category: release
date: 2015-05-14 21:58
excerpt: To better communicate our plans we continue with a approach of making our next sprint plans public.
permalink: blog/virtocommerce-2-1-june-2
tags: [aspstore, ecommerce, marketing, marketplace, open-source, promotions, search-indexing, seo, zapper, zendesk]
title: "Virto Commerce 2.1 - June 2"
---
To better communicate our plans we continue with a approach of making our next sprint plans public. There will also be a post regarding previous (May 11) release and what functionality has been implemented. Stay tuned for that.

So here is again our plan for the next Development Sprint scheduled to be completed on June 2nd. The sprint is about 3 weeks at the end of which we’ll have some new functionality available. Below is description of those new features. You can also let us know what you want to see in platform by posting it here: [http://help.virtocommerce.com/support/discussions/forums/264127](http://help.virtocommerce.com/support/discussions/forums/264127)

## Platform Improvements

* **Git Branches Reorganization** - merging webadmin branch to dev and master branch, dev branch will be used as an integration branch while master as a release branch
* **Virto Commerce Platform Release** - bare platform release that doesn’t include&nbsp;any extensions/modules. It can be used&nbsp;to develop non-commerce business applications
* **Web Platform Installer Release** - updating Virto Commerce package available through Microsoft to version 2
* **Indexing UI** - display progress indicators
* **Dashboard UI** - connecting to real data indicators, allow modules to integrate into dashboard via API
* **Import/Export Module** - implement unified API and UI for importing and exporting data in Virto Commerce
* **Store Developer Training Materials** - training documents for a store developer track

## Frontend

* **Payment Gateways/Methods** - concept for integrating with front end, configuration on per store basis
* **Shipping Methods**
* **Blogging** - add support for jekyll style blogs with markdown and liquid support

## Price Lists

* **Price List Expressions** - implement ability to define expressions for pricelists to allow to define how lists are assigned

## Marketing

* **Dynamic Content** - implement expression builder, documentation on how content can be inserted into existing themes
* **Promotions** - integrate new engine in frontend store (cart, browsing, coupons, gifts). Usage tracking, Gift cards, performance optimization and caching, support for marketing events

## Order

* **Tax UI **- user interface for managing taxes
* **Extending Order Workflows** - document how to extend business logic around order processes
* **Order Number Sequencing** - improve how order numbers are generated

## Security

* **Support for OAuth Authentication**
* **Support for API Key Authentication**
* **Permission Grouping in UI**

## Customers

* **Account Integration** - add quick actions to customer screen (create account, disable, change password, login on behalf)
* **Organization Properties** - add UI for organization custom properties

## Integrations

* **Zapier Improvements** - document how happier integration works, add simple authentication mechanism
* **Zendesk Widgets** - display order information for customer ticket in zendesk
* **Shopify Store Import** - import data and themes from shipify stores
* **Alavara Tax Integration**
* **Beta for eBay and Amazon Import Module**