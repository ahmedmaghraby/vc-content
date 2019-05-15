---
author: VirtoCommerce
category: release
date: 2015-10-09 07:30
excerpt: We are pleased to announce the 2.5 release of Virto Commerce. The primary focus of this release was to update B2B ecommerce features and extended security. 
permalink: blog/virtocommerce-2-5-release-notes
tags: [announcements, azure, ecommerce, enterprise-ecommerce, features, open-source, platform]
title: "VirtoCommerce 2.5 Release Notes"
---
We are pleased to announce the 2.5 release of Virto Commerce. The primary focus of this release was to update <a href="https://virtocommerce.com/b2b-ecommerce-platform" target="_blank">B2B ecommerce</a> features and extended security.

Below are just some of the updates we made during last sprint, for more details you may refer to our github repository, there was more than **800 individual commits** since our last release with a lot of small fixes. The most significant features are outlined below.

## Request for Quote (RFQ)

A new "Quote" module was created. Now customers in a VirtoCommerce store can use the Request for Quote (RFQ) feature for unique variations of goods and services that are offered in the catalog instead of checking out. A buyer can add items and easily create an RFQ as if they were using a regular shopping cart.

A requisition list is used by buyers to add products to RFQs. Buyers can include multiple products in one RFQ and define unique specifications for each product. They can include attachments on the RFQ or on the product specification level. They can also specify the terms and conditions for the transaction. When the buyer submits an RFQ request, it is placed into a "Processing" state. A seller can view the RFQ in VirtoCommerce manager and submit a response when the request is in an "active" state. The buyer can also change or cancel the RFQ.

For an existing RFQ, a buyer can negotiate the price at the category level. The RFQ summary and list pages within the VirtoCommerce manager displays this information.

When sellers respond to an RFQ, they have the option of responding to each attachment, terms and conditions, product, category, as well as to each product specification or comment. Sellers and buyers negotiate aspects of RFQs (eg., price adjustments at the percentage or fixed price levels are a common point of negotiation). Sellers have the option of specifying a fulfillment center or substituting a product (so long as the buyer has provided that option in the request). A seller can also modify or cancel the RFQ.

Once sellers have responded to the RFQs, the buyer opens the RFQ and evaluates the responses to choose a winner (or multiple winners). When the RFQ response is accepted by the buyer and the seller is notified, the RFQ transaction is completed using one of the following processes:

* The buyer places an order that already contains the RFQ information.
* A contract already containing the RFQ information is created.
* The RFQ goes to the next round.

A record of the RFQ is maintained in the RFQ request list for a predetermined period of time, so that you can copy a RFQ that you repeatedly use. Responses are retained for the same time period to facilitate a seller's response to similar requests from the same buyer.

## Enable RFQ for store

To enable quotes functionality in your store, switch it on in Commerce manager ⇨ Stores ⇨ &lt;&lt;select store&gt;&gt; ⇨ Settings ⇨ EnableQuotes.

![](assets/images/blog/image11.png)

A RFQ’s main information after updating and submitting it to the customer. *

After successful negotiation the customer can click “Confirm and checkout”:

![](assets/images/blog/image08.png)

A store manager’s confirmed proposal complete with custom prices and additional discount is available for the customer in the Storefront. *

## Security scope bounded ACL

Scope bounded ACL allows you to limit the access to the actions of a particular object. For example, to restrict a user working with orders from a particular store, or concrete categories or catalogs.

It is not enough to check the ‘global’ permission, in the process of checking the permissions it is necessary to consider the context. Unlike a classic Object ACL (which serves as context only objects) in Scope bounded ACL, the context may be any condition which can be defined in code and may be used in further permissions checks.

To use this feature you need to define roles with permissions bounded (limited) by special unique scopes and assign that role to a user. You can read more about scope bounded ACL here: [working with platform security](docs/vc2devguide/working-with-platform-manager/basic-functions/working-with-platform-security).

**Key features**

* define complex conditions for access restrictions
* built-in UI for permissions scope assignment
* server (API methods) and UI permissions checks

![](assets/images/blog/image12.png)

## Individual tax provider for each store

A new "Tax providers" widget added to store edit blade.

![](assets/images/blog/untitled_k.png)

Now each store can have an individual tax provider assigned and providers can have individual configuration settings per store.

![](assets/images/blog/image14.png)

**Tax provider choosing blade**

![](assets/images/blog/image15.png)

**Avalara tax configuration for a selected store.**

New tax providers can be implemented. Read our documentation on how to create new tax provider module [here](docs/vc2devguide/extending-commerce/creating-new-tax-provider).

### Authorize.Net payment gateway

Now <a href="http://www.authorize.net/" rel="nofollow">Authorize.Net</a> payment gateway is supported. Configure it in a user friendly UI and let your customers pay by credit card using a leading provider of payment gateway services.

![](assets/images/blog/image13.png)

Authorize.Net payment gateway activated for selected store