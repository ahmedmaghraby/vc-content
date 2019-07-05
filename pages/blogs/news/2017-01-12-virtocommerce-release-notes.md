---
category: release
date: '2017-01-12'
permalink: blog/release-notes-2017-01-12
tags:
  - virtocommerce
  - announcements
  - ecommerce
  - enterprise-ecommerce
  - features
  - open-source
  - bulk-order
title: 'January 2017 release notes'
---
The main topics for the release: new Subscriptions module, updated Personal cabinet and Bulk orders in storefront.

## Subscriptions and recurring orders

We're happy to announce the release of Subscriptions module! Easily define payment plans for individual products and have those products bought periodically. Or provide subscriptions to services as digital products. 

### Subscriptions in Commerce manager

Catalog product details and reordering schedule management in Commerce manager:

<img alt="Order recurring schedule in product details view" src="../../assets/images/blog/product-order-schedule.PNG" />

After customer orders this product, a new subscription is also created. Most parameters of the future order can be changed in subscription management UI:

<img alt="Subscriptions list and details view" src="../../assets/images/blog/subscription-list-details.PNG" />

### Subscriptions in storefront

Product with reordering schedule showcased in storefront:

<img alt="Subscription product in storefront" src="../../assets/images/blog/storefront-product-with-subscription.PNG" />

Customer adds such products to cart together with ordinary goods and creates order as usual. The defined schedule makes sure to generate new orders after each period ends.

### Recurring orders

Make recurring orders easily! If there are only ordinary goods in the customer's shopping cart, she / he could simply check "I want this to be a recurring order" and select one of predefined intervals:

<img alt="Making a recurring order in checkout" src="../../assets/images/blog/checkout-recurring1.PNG" />

More information and source code is available at <a href="https://github.com/VirtoCommerce/vc-module-subscription" rel="nofollow" target="_blank">Subscription module home page</a>.

## Personal cabinet

Personal cabinet is a special section at storefront website, dedicated to registered customers. They can browse their orders history, manage personal data, etc. The great news is that the personal cabinet has been rewritten from scratch. Besides a new look and brightened User-eXperience, there goes stunning performance (with partial AngularJS script based page updates):

<img alt="Orders list in personal cabinet" src="../../assets/images/blog/personalCabinet-orders.png" />

The created order details and checkout views were unified to provide integral UI:

<img alt="Order details in personal cabinet" src="../../assets/images/blog/personalCabinet-order.png" />

## Bulk order

Current release contains a new storefront feature - bulk orders.

Bulk order can be enabled or disabled in theme settings (settings_data.json) - parameter **bulk_order_enabled**. If it has a value **true**, a storefront main menu item **Bulk order** would appear.

<img src="../../assets/images/blog/bulk_order_1.png" />

There are two ways to create a bulk order:

* via form fields
* via copy/paste of CSV file

### Create a bulk order via form fields

Bulk order page contains form fields to enter product SKUs and quantities:

<img src="../../assets/images/blog/bulk_order_2.png" />

If some of the entered SKUs were not found in product catalog, a corresponding informer would appear.

### Create a bulk order via CSV

There is another way to create a bulk order: just copy the contents from CSV file and paste it into special field on the bulk order page.

<img src="../../assets/images/blog/bulk_order_3.png" />

The CSV content should be in the following format: SKU,quantity. For example:

```
6AF8SM0VPFV6,30
```

If some of the entered SKUs were not found in product catalog, a corresponding informer would appear.