---
author: virtoCommerce
category: release
date: 2015-07-04 09:00
excerpt: The 2.2 release is here and it brings many innovative features. The sprint was only 3 weeks but our development team accomplished a lot.
permalink: blog/virtocommerce-2-2-release-notes
tags: [announcements, architecture, aspnet, azure, enterprise-ecommerce, features, microsoft-cloud, open-source, platform]
title: "VirtoCommerce 2.2 Release Notes"
---
The 2.2 release is here and it brings many innovative features. The sprint was only 3 weeks but our development team accomplished a lot. Below is just some of the updates we made during last sprint, for more details go to our github repository as there was more than **600 commits** in the past 3 weeks.

* **Dashboard** – new live dashboard tied to order system
* **Settings Management** – separate settings blade for easier access to all configuration parameters
* **Protection against accidental deletes** - confirmation when trying to delete catalogs
* **Tax Calculations** - connected avalara avatax for realtime tax calculations, certification is pending
* **Storefront checkout improvement** - integrated user authentication and better displaying of credit card choices
* **New payment methods** - added Paypal Direct Payment gateway, added US/UK implementation for Klarna using new Klarna REST API
* **<a href="https://virtocommerce.com/features/shopify-migration" target="_blank">Shopify Integration</a>** - import all your shopify themes, pages, products, images, collections and more right into the virto commerce store, learn more on how it works <a href="https://virtocommerce.com/features/shopify-migration" target="_blank">here</a>
* **Separate Solutions** - created different solutions for empty platform and e-commerce solution, allows to use empty platform for new application development
* **Rebuild Index button** - added r*ebuild index* button to catalogs list
* **Predefined settings** - added support for predefined (platform) settings in standard UI
* **Zapier Authentication API** - Zapier integration module API now works only if valid API key provided
* **Property Management redesigned** - multi-language dictionary property management redesigned in catalogs. Setting a value in catalog default language results in assigning corresponding values in all other languages. Added support for individual catalog item (product or variation) properties management.
* **Store SEO** - added SEO management to store UI
* **Documentation** - added article about background jobs, new <a href="https://www.youtube.com/watch?v=2TORKsoj5Bw" target="_blank" rel="nofollow">youtube video</a> on how to create Zap with VCF in Zapier, more documentation updates can be seen <a href="https://virtocommerce.com/docs" target="_blank">here</a>

## What’s next?

We have many more features planned for the next few sprints including:

* **Notification Engine** - flexible template and event driven notification system to send messages through email, sms and other pluggable gateways, define custom events and templates using module extensibility
* **Copy/Paste** - allow for copy/paste functionality to move products and categories in catalog
* **Import/Export functionality** - platform wide import/export engine, with each module being able to define import/export interfaces
* **Recurring Orders** - support for subscription based products
* **<a href="https://virtocommerce.com/features/ecommerce-microsoft-dynamics-nav" target="_blank">Microsoft Dynamics NAV Integration</a>** - integration module for ERP system allowing synchronizing product, order and customer data
* **ShipStation Integration** - provide module that allows to use popular service to ship items ordered through Virto Commerce
* **<a href="https://virtocommerce.com/features/orchard-cms-ecommerce" target="_blank">Orchard CMS Ecommerce Module</a>** - integration with orchard CMS to allow displaying products, categories, shopping cart and checkout pages inside orchard

## Dashboard

The dashboard now is dedicated to customer service representatives (CSRs) as orders and sales statistics are provided by default.

![](assets/images/blog/pasted_image_0.png)

## Settings management

All settings in one place: a dedicated blade for convenient settings management added. The settings are grouped to hierarchical tree for easier navigation. Navigate the tree, use breadcrumbs to go up or search to find particular setting or group.

![](assets/images/blog/pasted_image_1.png)

## Delete confirmations in catalogs

A more detailed and attention-requiring delete confirmation dialogs are displayed while deleting a catalog, categories or items. The “Confirm” action gets activated only after a correct text was typed.

![](assets/images/blog/pasted_image_2.png)

## Tax calculation

Avalara AvaTax module has been added and provides realtime integration uisng Avalara API.

It’s time consuming to keep tax rates up to date manually.  After installing Virto Commerce Avalara module, all you need to do is enter Avalara provided credentials and click "test connection" to start using the services.

![](assets/images/blog/pasted_image_3.png)

All taxes applied to items and shipping are stored in Virto Commerce and Avalara user cabinet.

## Storefront checkout improvements

* Merging anonymous cart with cart of registered customer on checkout with popup dialog

![](assets/images/blog/base641a65d33f8199e417.png)

* Registered customer can choose existing address from dropdown while filling shipping or billing addresses

![](assets/images/blog/base643d11190c679bd248.png)

* Added payment method with bank card through PayPal Direct

![](assets/images/blog/base64673775ead581000.png)

* Download links for digital products on “thank you page” after successful payment

![](assets/images/blog/base642335c95f976b81e6.png)
