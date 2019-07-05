---
category: virtocommerce-news
date: '2017-07-26'
permalink: blog/vc-latest-updates
main-image: ../../assets/images/blog/vc-latest-updates.jpg
excerpt: Our Virto Commerce platform is constantly evolving, getting better, faster, and more versatile with each update. We’re always on top of the latest marketing, e-commerce and software development trends. Here’re the latest updates to the Virto Commerce platform.
tags:
- ecommerce
- enterprise-ecommerce
- virtocommerce
title: What’s new with the Virto Commerce platform?
---
### <dfn>Latest Updates</dfn>

Our <a href="{{ 'https://virtocommerce.com/b2b-ecommerce-platform' | absolute_url }}">Virto Commerce platform</a> is constantly evolving, getting better, faster, and more versatile with each update. We’re always on top of the latest marketing, e-commerce and software development <a href="{{ '/glossary/b2b-ecommerce-trends' | absolute_url }}">trends</a>.

Please feel free to [try our software](https://virtocommerce.com/try-now) and send us feedback and suggestions! Meanwhile, here’re the latest updates to the Virto Commerce platform.

<h2>New search indexation engine (Three type of search index engines)</h2>

We have added 3 new search modules, so the platform now supports three search index search engines:

-	[Elastic Search](https://virtocommerce.com/apps/extensions/virto-elasticsearch-module)

-	[Lucene Search]( https://virtocommerce.com/apps/extensions/virto-lucene-search-module)

-	[Azure Search](https://virtocommerce.com/apps/extensions/virto-azure-search-module)

Elasticsearch is a great solution for your datastore, especially if hardware capability is not an issue for your business! It is fully compatible with our Virto Commerce platform and recommended by our team. 

Elasticsearch achieves faster responses by searching an index instead of going through the text directly. It uses Apache Lucene to create and manage the “inverted index” – essentially it’s like finding pages in a book that contain a certain keyword by scanning the index on the book cover, as opposed to going through every word on every page.

Azure search does everything that Elasticsearch can do, and it does it in the cloud. This means less adjusting, and no virtual machine needed. It also makes it cheaper to manage, monitor and scale. 

<ins>Additional updates:</ins>

•	Avoided special “assembly point” for indexation and search functionality (decomposition at special modules) 

•	Created single point for start indexation/re-indexation process with progress notifications 
<img src='../../assets/images/blog/additional-updates.jpg'>

•	Improved expandability of search by new types of documents and full control of indexation process from code

•	Added support GEO points type and search

•	Added availability to use special search  phrase syntax. The search phrase can contain keywords, attribute filters, range filters and price range filters.
<img src='../../assets/images/blog/additional-updates-1.jpg'>

<h2>Catalog completeness module</h2>

This new feature will automatically check, if all the data related to a certain product has been entered into the database and proceed with publishing it in the <a href="{{ 'https://virtocommerce.com/glossary/punchout-catalog' | absolute_url }}">catalog</a> once the evaluation comes out positive. It will allow a user to implement customizable metrics that show percentage of the information entered in the product card (ex. price, description, photo, etc.) and determine its readiness for publishing. That way a <a href="{{ 'https://virtocommerce.com/product-information-management-software' | absolute_url }}">product manager</a> will be able to look at the overall product list and right away see the stage of each product card.

Take a closer look at this module [here](https://virtocommerce.com/apps/extensions/catalog-publishing).

Here are a few examples of how it works:

•	Adding new channel to calculate completeness percentage by specified criteria	
<img src='../../assets/images/blog/vc-latest-updates-1.jpg'>

•	Using search filters  to display items by range of completeness in the catalog search 
<img src='../../assets/images/blog/vc-latest-updates-2.jpg'>

<img src='../../assets/images/blog/vc-latest-updates-3.jpg'>

A reddish background indicates that the module is not filled completely:
<img src='../../assets/images/blog/vc-latest-updates-4.jpg'>

<h2>Platform internationalization</h2>

The platform now supports international settings, so you can control formats for displaying dates, numbers, currencies, and so on. 

This new module makes life a whole lot easier for the international vendors. [Check it out!](https://github.com/VirtoCommerce/vc-platform/releases/tag/v2.13.8)
<img src='../../assets/images/blog/vc-latest-updates-5.jpg'>

<h2>Catalog property validation and image management improvements</h2>

[New property validation settings]( https://github.com/VirtoCommerce/vc-module-catalog/releases/tag/v2.18.0) allow for more flexible and precise control of the user information input
<img src='../../assets/images/blog/vc-latest-updates-6.jpg'>

We have also revamped the user interface for working with product images and categories. Here is what it looks like now:
<img src='../../assets/images/blog/vc-latest-updates-7.jpg'>

<h2>Working with Azure scale out</h2>

Did you know you could run the Virto Commerce platform on multiple instances?

We have recently released a new [help-guide](https://virtocommerce.com/docs/vc2devguide/deployment/platform-scaleout) that explains how to do it and also how to use Redis as a cache synchronization server.

<h2>Minor security vulnerability fixes and performance improvements</h2>

1. Improved performance of the following modules: 

-	Customer
-	Catalog 
-	Inventories

2. Eliminated a memory leak in the catalog module, which led to excessive memory consumption

3. Fixed minor security vulnerability issues in the assets and cart modules 
