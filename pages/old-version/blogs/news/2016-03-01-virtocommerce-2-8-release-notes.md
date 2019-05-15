---
author: VirtoCommerce
category: release
date: 2016-03-01 08:30
excerpt: The main focus of this release was Storefront API redesign and Mobile Starter kit.
permalink: blog/virtocommerce-2-8-release-notes
tags: [20, announcements, ecommerce, enterprise-ecommerce, features, open-source, platform, release-notes ]
title: "VirtoCommerce 2.8 Release Notes"
---
The main focus of this release was Storefront API redesign and Mobile Starter kit.

## Mobile Starter kit

Check out our new Mobile Starter kit for developing e-commerce apps using VirtoCommerce API. It is developed using <a href="http://ionicframework.com/" rel="nofollow">Ionic Framework</a>, <a href="https://angularjs.org/" rel="nofollow">AngularJS</a> and <a href="https://cordova.apache.org/" rel="nofollow">Cordova</a>:

![](assets/images/blog/untitled_5.png)

The VirtoCommerce Mobile Starter kit is currently available to partners and customers only. Contact us for more info on how to get the kit: [https://virtocommerce.com/contact-us](https://virtocommerce.com/contact-us).

A preconfigured Mobile Starter kit app is already publicly available. Check for instructions at [Mobile Starter app](docs/vc2userguide/introduction-to-virtocommerce/mobile-starter-app) page.

## Storefront API

A new storefront API layer was defined. Create new point of sale applications in any environment or technology and exchange the data in Json format:

![](assets/images/blog/untitled_6.png)

Currently web Storefront and Mobile Starter kit utilize this common API. The existing Storefront controllers were significantly refactored in favor of the new API.

## Login on behalf

A VirtoCommerce Manager user (operator) possessing a **store:loginOnBehalf** permission can sign in to Storefront on behalf of a customer and do everything the customer can.

**Login on behalf** button was added to the customer account management toolbar. Click to open a special Storefront page for logging in as a selected customer:

![](assets/images/blog/untitled_7.png)

Operator should enter his own credentials and get signed in as a customer:

![](assets/images/blog/untitled_8.png)

This “**Logged in on behalf of**” fact is indicated in the upper right corner. **Customer** in this case is the first name of the customer:

![](assets/images/blog/untitled_9.png)

Information about the operator is stored in the authentication cookie and saved to the appropriate (CreatedBy, ModifiedBy) database fields later.

![](assets/images/blog/untitled_10.png)

Order created by operator on behalf of Customer

## Stores trusted relationships

Previously all stores were sharing security accounts and each registered user could login to any store. In version 2.8 we changed this behaviour - **stores trusted relationships** were added. This enables more flexible control and access management for stores.

By default a store is not sharing security accounts, meaning that all accounts that were registered in it can login to that store only. But you can change this behavior by adding trusted relationship links to other stores. That means that all accounts registered in this store can also login to other store(s).

### Example

We have two stores: **Electronics** and **Clothing**. We want users of **Electronics** store to be able to login to **Clothing **(but not vice versa). We do it by adding **Clothing **to linked stores list of **Electronics **store:

![](assets/images/blog/untitled_11.png)

### CMS menu link lists associations

Now you can extend your site menu links by adding association to existing product or category:

![](assets/images/blog/untitled_12.png)

Then you can use associated product or category object in your storefront theme:

![](assets/images/blog/untitled_13.png)

Showing menu items with category image:

![](assets/images/blog/untitled_14.png)

Menus decorated with images from associated categories

### Product cloning

Now you can make copy of a product record with all related objects (variations, properties, descriptions, etc.)

![](assets/images/blog/untitled_15.png)

### Open Storefront store from manager

Operator can now navigate quickly to the store in Storefront from the currently viewed store in Manager:

![](assets/images/blog/untitled_16.png)

### Platform API changes

#### **New methods**

POST <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/VirtoCommerce_platform/Assets_UploadAssetToLocalFileSystem"> **/api/platform/assets/localstorage**</a> This method is used to upload files on local disk storage in a special uploads folder

GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Store_module/StoreModule_GetLoginOnBehalfInfo"> **/api/stores/{storeId}/accounts/{id}/loginonbehalf**</a> Check if given account has login on behalf permission

GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Store_module/StoreModule_GetUserAllowedStores"> **/api/stores/allowed/{userId}**</a> Returns list of stores which user can login to

#### **Changed methods**

GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_GetContactById"> **/api/contacts/{id}**</a> - added new property Contact.SecurityAccounts. Returns all security account’s logins associated with this member.

GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Commerce_core_module/StorefrontSecurity_GetUserById"> **/api/storefront/security/user/id/{userId}**</a>

GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Commerce_core_module/StorefrontSecurity_GetUserByName"> **/api/storefront/security/user/name/{userName}**</a>

GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Commerce_core_module/StorefrontSecurity_GetUserByLogin"> **/api/storefront/security/user/external**</a> - Changed response type to **StorefrontUser** with new property **AllowedStores** (Array[string], optional): List of stores which user can login to.