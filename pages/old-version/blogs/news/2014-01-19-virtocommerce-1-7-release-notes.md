---
author: VirtoCommerce
category: release
date: 2014-01-19 01:14
excerpt: It has been a very busy time for us at the end of the year. We released both 1.6 and now 1.7 versions and acquired new customers who’s sites we can soon showcase!
permalink: blog/virtocommerce-1-7-release-notes
tags: [azure, ecommerce, responsive, webpi]
title: "Virto Commerce 1.7–Released!"
---
It has been a very busy time for us at the end of the year. We released both 1.6 and now 1.7 versions and acquired new customers who’s sites we can soon showcase!

It is now even easier to try and evaluate Virto Commerce both on premise and in the cloud (azure) as we successfully submitted our product to Microsoft Web Gallery ([http://www.microsoft.com/web/gallery/vccommunity.aspx](http://www.microsoft.com/web/gallery/vccommunity.aspx)).

Here is the list of new features:

* **Responsive template** – now support mobile devices and tablets
* **Web PI package** - for both azure and on-premise (IIS and WebMatrix)
* Lucene search provider – can be used in place of elastic search provider for development purpose
* Migrated to Azure SDK 2.2
* Order Form Properties – save additional values with an order
* **Order on behalf of the customer** – authenticate as a customer
* Import improvements / Background process indicators added
* More dynamic content types and properties

## What’s next?

We have several major new features coming in the next release, including new Reporting Module and advanced SEO support. Both of the features can be seen in the appropriate branch on github if you want an early preview. We also will be improving our responsive template.

## Responsive template

We have redesigned our frontend template site to support responsive design. We also added a lot of advanced functionality used in modern e-commerce sites. The site itself has been optimized to work on mobile, tablet and large monitors with adaptive layouts.

![](assets/images/blog/web2.png)

For example new dynamic content templates are used to showcase various products from STAFF PICKS to NEW PRODUCTS on homepage, all done dynamically based on catalog data. Reviews are now shown in the category page and breadcrumbs are displayed when viewing the product.

## Web Platform Installer

It is now possible to setup Virto Commerce using Microsoft Web Platform Installer (<a href="http://www.microsoft.com/web/gallery/vccommunity.aspx" rel="nofollow">http://www.microsoft.com/web/gallery/vccommunity.aspx</a>) or directly from within azure management site as shown in the screenshot below:

![](assets/images/blog/tmp20f3.png)

## Order properties

A possibility to store supplementary information within an order (e.g. store referrer Id) was added. This information is called “Order property” and it can be added using VirtoCommerce API. The already created order properties are displayed in the Order view inside Commerce Manager: 

![](assets/images/blog/clip_image001_.png)

## Place an Order on behalf of the customer

An ability for customer service representative (CSR) to place orders on behalf of the customer was added in version 1.7. Main features include: 

* Login to a store on behalf of the specified customer
* Identify that an Order has been placed by CSR

Placing an Order on behalf of the customer:

* Update VirtoCommerce database to the latest version. Update instructions available: [http://virtocommerce.com/docs/old-versions/vc113devguide/database-migrations](docs/old-versions/vc113devguide/database-migrations)
* Create a new role (or update an existing one) adding a “Login on behalf of a contact” permission from “Customer Service” permissions group in Commerce Manager.
* Make sure to assign the role to a CSR.
* Log in to Commerce Manager using CSR account and open Customer Service section. Search for the necessary customer and open his profile details.
* Click “CONTACT OPTIONS”, select “Login on behalf”:

![](assets/images/blog/clip_image002a.jpg)

* A store login form (including customer information) is opened in a browser:

![](assets/images/blog/clip_image004a.png)

* CSR logs in using his own credentials. A store that the customer belongs is opened; if the customer doesn’t belong to any store, then a default store is opened.
* CSR places a new Order. The fact that an order was placed on behalf of a Customer is saved in Order properties. Order properties are displayed in Properties tab of a particular Order in the Commerce Manager:

![](assets/images/blog/clip_image006a.jpg)

## Import improvement

Import now runs in background and uses the common Commerce Manager status bar to provide import status to the user. That means there is no need to wait until the import finishes to proceed to another task. You can do other work while the import is in progress. Still you can see if the import is in progress, completed

![](assets/images/blog/clip_image002.gif)

or if any errors happened during import.

![](assets/images/blog/clip_image004.gif)

## Dynamic content improvement

Dynamic content presentation code has been refactored to be consistent with other modules code and to fix some issues related to dynamic content properties setup. Also new properties has been added to particular dynamic content types.