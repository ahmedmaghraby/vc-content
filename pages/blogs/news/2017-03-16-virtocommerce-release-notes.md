---
category: release
date: '2017-03-16'
permalink: blog/release-notes-2017-03-16
excerpt: We have recently released a new update that includes a number of significant improvements to the platform!
tags:
  - virtocommerce
  - announcements
  - ecommerce
  - enterprise-ecommerce
  - features
  - open-source
title: 'March 2017 release notes'
---
We have recently released a new update that includes a number of significant improvements to the platform!
Here are the most major changes we’ve made:

* New, revamped main menu in the manager
* Product comparison 
* Storefront 'smart' cache invalidation 

Below is a more detailed overview of these new features.

### New main menu in manager
We have fully redesigned our main menu in the VC manager to be more in compliance with the Azure portal’s main menu.
Customization will now be a lot more convenient.

<img alt="Main menu" src="../../assets/images/blog/new-main-menu.PNG" />

### Comparing products
This feature allows to you to compare product related data of different products - such as price, specifications, and properties.

<img alt="Comparing products" src="../../assets/images/blog/comparing-product.PNG" />

### 'Smart' storefront cache invalidation
We have created a code and an API in Cache.module which note all changes in these types of objects in CMS, Catalog, Pricing and Store, and trigger a special API method 
<a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Smart_caching_module/ChangesTracking_GetLastModifiedDate">GET /api/changes/lastmodifieddate</a>
which returns a timestamp for the latest changes.

Storefront can monitor this API and invalidate cache if the API returns a new timestamp.

Smart cache invalidation can be enabled or disabled in storefront through web.config by changing the following settings

```
   <add key="VirtoCommerce:Storefront:ChangesTracking:Enabled" value="true" />
   <!-- polling interval -->
   <add key="VirtoCommerce:Storefront:ChangesTracking:Interval" value="0:1:0" />
```
We have also added a manual cache reset operation.

<img alt="Cache reset" src="../../assets/images/blog/store-cache-reset.PNG" />

### All order changes and payment transactions history are now logged
All changes in a customer’s order and all related/nested operations will now be logged and available for review.

<img alt="Order changes log" src="../../assets/images/blog/order-changes.PNG" />


