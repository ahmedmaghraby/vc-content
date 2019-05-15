---
author: VirtoCommerce
category: release
date: '2016-04-27 06:43'
excerpt: The new powerful platform extension point allows you to extend existing member types from the external module without changing the platform code.
permalink: blog/virtocommerce-2-10-release-notes
tags: [20, announcements, ecommerce, enterprise-ecommerce, features, open-source, release-notes, seo]
title: 'VirtoCommerce 2.10 Release Notes'
---
## Integration modules moved to separate repository

All integration modules were moved to the new <a href="https://github.com/VirtoCommerce/vc-modules" rel="nofollow">vc-modules repository</a>. Now the vc-community repository contains only the platform and eCommerce modules.

## New members extension point. (API, Entity framework and UI extension from custom module)

The new powerful platform extension point allows you to extend existing member types from the external module without changing the platform code. Possible extension types:

* .NET types derived from Member class
* API all new member types can be accessed through standard generic members API methods without any changes in platform
* persistent Entity Framework  infrastructure, each new member type can have its own tables
* use existing members management UI to represent new member types with customization

The article below describes in detail how to work with the members extension point.

[http://virtocommerce.com/docs/vc2devguide/extending-commerce/extending-members-domain-types](docs/vc2devguide/extending-commerce/extending-members-domain-types)

How to register new member types in your custom module

![](assets/images/blog/untitled_20.png)

How custom member types appear in management UI

![](assets/images/blog/1.png)

## Web Farms support

### Redis cache

Now storefront has two cache managers: `ILocalCacheManager` and `IDistributedCacheManager`.

`ILocalCacheManager` inherits from and replaces the `ICacheManager<object>`, which was used earlier. This is a simple in-memory cache and each storefront instance in the web farm has its own local cache.

`IDistributedCacheManager` also inherits from `ICacheManager<object>` but uses different configuration. First, it uses the JSON serializer, so everything being cached with this cache manager should be tested for serialization and deserialization. Second, if appSettings has `VirtoCommerce:Storefront:RedisCache:Enabled=true` then this cache manager uses a distributed Redis cache, which synchronizes between all storefront instances in the web farm. There is a new connection string, which describes the location and other parameters of the Redis server:

<span class="code-block">
`<add name="RedisCache" connectionString="endpoint,password=SECRET,ssl=True,abortConnect=False" />`
</span>

Where the endpoint is the IP address or domain name of the Redis server.

If Redis cache is disabled, then `IDistributedCacheManager` works like a serializing local cache.

### Azure blob theme storage

Running multiple storefronts instances on web farms requires shared storage for CMS themes and static content resources instead of a local file system when a running a single storefront instance. We decide to use this for Azure blob storage service.

![](assets/images/blog/untitled_21.png)

To switch to azure blob storage for CMS content resources, the following steps are required:

* on storefront web.config

<span class="code-block">
`<add name="ContentConnectionString" connectionString="provider=AzureBlobStorage;DefaultEndpointsProtocol=https;AccountName=yourAccountName;AccountKey=yourKey;rootPath=cms-content" />`
</span>

* on manager web.config

<span class="code-block">
`<add name="CmsContentConnectionString" connectionString="provider=AzureBlobStorage;rootPath=cms-content;DefaultEndpointsProtocol=https;AccountName=yourAccount;AccountKey=yourKey" />`
</span>

## SEO conflicts detection and resolution

SEO management was redesigned and an intelligent conflicts resolution feature was added.

UI prevents SEO conflicts at concrete product (or category) within the concrete store level.

![](assets/images/blog/untitled_22.png)

Conflicting SEO detection is executed every time when you open a store in Manager UI. In case same duplicating SEOs are found, the red SEO widget comes into notice:

![](assets/images/blog/untitled_23.png)

SEOs list now has an informer describing the problem. Click "Resolve conflicts" and fix the duplicating SEOs quickly by updating semantic URL(s):

![](assets/images/blog/untitled_24.png)

In this article you can read more about SEO url routing on storefront works [http://virtocommerce.com/docs/vc2devguide/working-with-storefront/storefront-seo-routing](docs/vc2devguide/working-with-storefront/storefront-seo-routing).

## CMS UI and API redesign

CMS module was rewritten nearly from scratch. Now themes, pages and blogs browsing has a unified UI which is very similar to Assets management.

![](assets/images/blog/untitled_25.png)

## Simple images uploading for blog and static pages

Added ability to upload and insert images within different modes (markdown / HTML) via drag and drop, copy-paste and standard file open dialog.

## Configurable SEO links in storefront

It is possible to define how links for products and categories are built in storefront for each store.

* In the Virto Commerce Manager open Browse > Stores
* Select a store
* Click Settings widget

There is a new setting, **SEO Links**, with one of three predefined values:

**Long** - build full path with SEO keywords:

* /grandparent-category/parent-category/my-cool-category
* /grandparent-category/parent-category/my-cool-category/my-cool-product

**Short** - use only last SEO keyword in the path for product or category:

* /my-cool-category
* /my-cool-product

**None** - don't use SEO keywords for links, use category ID and product ID:

* /category/123
* /product/123

## Right-to-left

The right-to-left (RTL) writing system is now supported in Manager:

![](assets/images/blog/untitled_26.png)

Even if you haven't translated the localization scripts to RTL language yet, the Manager UI switching to RTL can be done right away:

* Add a single translation file dedicated to RTL. More details on localization is [available here](docs/vc2devguide/working-with-platform-manager/localization-implementation).
* Set Commerce Manager language in Configuration -> USER PROFILE to RTL language.
* Refresh the browser page.

## Applying tier prices while changing the line item quantity in shopping cart

If product has several prices then line item price will change depending on line item quantity (tier prices).

Price for quantity 1 is $249.95 (without any discounts):

![](assets/images/blog/fig1.png)

Price for quantity 3 or greater is $240.00 (without any discounts):

![](assets/images/blog/fig2.png)

## Other improvements

* Add more advanced support for related products in storefront
* Possibility of individual configuration for order and RFQ tracking numbers in each store
* Dynamic properties loading performance improvement
* Major fixes with cart and order totals calculation
* Simplifying storefront routing

## Platform API changes

### New methods

**CMS Content module**

* GET **/api/content/{contentType}/{storeId}** - Return streamed data for requested by relativeUrl content (Used to prevent Cross domain requests in manager)
* DELETE **/api/members** - Delete content from server
* POST **/api/content/{contentType}/{storeId}** - Upload new content item
* GET **/api/content/{contentType}/{storeId}/search** - Search content items in specified folder and using search keyword
* GET **/api/content/{contentType}/{storeId}/search** - Rename or move content item
* GET **/api/content/copy** - Copy contents
* GET **/api/content/{contentType}/{storeId}/unpack** - Unpack contents from archive
* POST **/api/content/{contentType}/{storeId}/folder** - Create content folder

**Commerce core module**

* PUT **/api/seoinfos/batchupdate** - Batch create or update seo infos
* GET **/api/seoinfos/duplicates** - Get seo dupllicates for store

### Removed methods

* All old  cms content module methods: **/api/cms instead**, **/api/cms/menu**