---
author: VirtoCommerce
category: release
date: 2016-02-02 01:02
excerpt: The main focus of this release was performance tuning and stability.
permalink: blog/virtocommerce-2-7-release-notes
tags: [20, announcements, ecommerce, enterprise-ecommerce, features, open-source, platform, release-notes ]
title: "VirtoCommerce 2.7 Release Notes"
---
The main focus of this release was performance tuning and stability.

## Advanced search in Catalogs

Get a better perception of catalog product / category search result, as the results are now grouped by category:

![](assets/images/blog/78c665d5-cc7e-5197-9de5-b0293ddd04bd.png)

Search results under catalog are now grouped by category.

Furthermore, create and configure as many custom filters as you need. The selected custom filter will be applied every time you browse a catalog categories.

## Currencies functionality rewritten

You requested for it and we implemented it for you! The currencies were rewritten and made fully customizable. Now you can have not only ISO 4217 standard, but any other currency, including virtual currencies such as points, scores, etc.

![](assets/images/blog/247b5c8b-21d6-66e6-ceda-39cf3e3a12b2.png)

Currencies management

New key features in currency system:

* full currency display customization;
* set exchange rates for on the fly exchanging if your store supports multiple currencies and you don’t want to (or can’t) define pricing for each product;
* each store can have different currencies;
* automatic currency formatting on Storefront depending on current customer culture.

## Performance improvements

VirtoCommerce Storefront and Manager performance was significantly improved by:

* reducing and paralleling API calls;
* smartly caching some frequently used API methods;
* reducing the size of JSON objects used in Ajax requests;
* database indexation and bulk object loading.

![](assets/images/blog/907a237b-777a-8e52-6f88-348566593974.png)

Product details loading performance boost

## Storefront shopping cart validation

Additional shopping cart validation was implemented to inform the customer about all the changes that have occurred since the product was added to the cart.

![](assets/images/blog/cdad0a51-a4bb-79ae-87b7-53de91cc7027.png)

Here are a few standard cart validation warnings:

* product is no longer available;
* product available quantity decreased;
* product placed price has changed;
* selected shipping method no longer available;
* selected shipping method price has changed.

## Advanced error handling in Storefront &amp; Manager

Now all server Storefront and Manager errors are handled and logged by <a href="https://www.google.com/url?q=https://github.com/nlog/NLog/wiki/Configuration-file%23rules&amp;sa=D&amp;ust=1454407345039000&amp;usg=AFQjCNH8FvlAk15w7r0gMO96WLJr05iHsQ" rel="nofollow">NLog</a> rules.

Also, any Storefront Ajax request error won’t be skipped unnoticed thanks to special popup:

![](assets/images/blog/e283ffea-6ba8-9abe-2689-9a132a1da768.png)
