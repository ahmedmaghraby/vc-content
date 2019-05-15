---
author: VirtoCommerce
category: release
date: '2016-03-17 06:43'
excerpt: The main focus of this release was Social Login and lazy API data loading in Storefront.
permalink: blog/virtocommerce-2-9-release-notes
tags: [20, announcements, ecommerce, enterprise-ecommerce, features, open-source, release-notes, seo]
title: 'VirtoCommerce 2.9 Release Notes'
 ---
The main focus of this release was Social Login and lazy API data loading in Storefront.

## Social Login

Ability to sign in via external login providers (Google, Facebook, etc.) on Storefront:

![](assets/images/blog/capture.png)

Documentation for developers [is here](docs/vc2devguide).

## Storefront lazy API data loading and render time pagination in Liquid templates

Next Liquid context properties will be accessed by using lazy loading and support render-time pagination: Collections, Products, Collection, Collection.Products, Collection.Tags, Customer.QuoteRequests, Customer.Orders, Customer.Addresses.

We define special IMutablePagedList&lt;T&gt; abstraction to represent paged collection with lazy loading support and pagination setting changes (slicing).

Declaration:

![](assets/images/blog/untitled_17.png)

Definition:

![](assets/images/blog/6d0be2dc-c641-6a95-d69f-c4b0c468cca1.png)

Usage in Liquid:

![](assets/images/blog/untitled_18.png)

## Unique SEO keywords within one tenant (Store)

Now Categories and Products can have unique SEO information defined for each store. This feature allows to maintain URL uniqueness when multiple products with the same SEO are exposed within one store.

Another useful scenario is to use different SEO for a single product sold in different stores.

![](assets/images/blog/72f1f244-e73e-6e82-0c29-c8f8683c1148.png)

Product SEO management for "Electronics" store

## Store settings

Individual settings for each store added. That is in addition to Dynamic properties that we had already:

![](assets/images/blog/d2fce9a0-8204-c190-6cb1-57161789fdf1.png)

## Individual asset container for each store

Manage assets for each store independently. A dedicated folder for each store now exists in the assets management system. Access and manage assets directly from store:

![](assets/images/blog/untitled_19.png)

## Other improvements

* New "Memory" <a href="http://hangfire.io/" rel="nofollow">Hangfire</a> job storage type added. It’ll be used by default instead of database based storage;
* Permalinks in blogs and pages made more compatible with <a href="https://jekyllrb.com/" rel="nofollow"><span style="font-weight:400;">Jekyll permalinks</span></a>.

## Platform API changes

**New methods**

* GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_GetMemberById">**/api/members/{id}**</a> - Get member by id. Member is a base type for multiple derivative types such as Organization, Contact or other custom type;
* DELETE <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_DeleteMembers">**/api/members**</a> - Delete members by ids;
* POST <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_CreateMember">**/api/members**</a> - Create new member (of concrete, known member type). (Not finished, will be done in next releases);
* PUT <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_UpdateMember">**/api/members**</a> - Update any member. (Not finished, will be done in next releases).

**Obsolete methods**

* GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_GetOrganizationById">**/api/organization/{id}**</a> - use GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_GetMemberById">**/api/members/{id}**</a> instead;
* GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_GetContactById">**/api/contacts/{id}**</a> - use GET <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_GetMemberById">**/api/members/{id}**</a> instead;
* DELETE <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_DeleteContacts">**/api/contacts**</a> - use DELETE <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_DeleteMembers">**/api/members**</a> instead;
* DELETE <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_DeleteOrganizations">**/api/organization**</a> - use DELETE <a href="http://demo.virtocommerce.com/admin/docs/ui/index#!/Customer_management_module/CustomerModule_DeleteMembers">**/api/members**</a> instead.