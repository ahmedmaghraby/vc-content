---
author: VirtoCommerce
category: release
date: 2015-05-17 22:26
excerpt: This release focus was on performance and technology updates as well as some smaller enhancements.
permalink: blog/virtocommerce-2-0-release-notes
tags: [announcements, aspnet, dashboards, ecommerce, ecommerce-permissions, enterprise-ecommerce, platform, release-notes, zapier, zendesk]
title: "Virto Commerce 2.0 Release Notes"
---
This release focus was on performance and technology updates as well as some smaller enhancements.

You can see the latest demo as well as download source code at: <a href="https://virtocommerce.com/try-now" target="_blank">https://virtocommerce.com/try-now</a>.

Here is the list of new features:

* **Platform Updates** – base pure platform for any business application
* **Security role management** – improved role management
* **CMS Content Module** – a new module that allows quickly manage store content
* **Integrations** – Zapier and Zendesk integrations
* **New Dashboards** – edit and save custom dashboards

## Virto Commerce Platform

We have isolated a clean platform constructed to the full compliance of SOLID and DDD architectural principals. Designed for use in Azure or IIS based environments. I is based on the following technologies:

* <a href="http://asp.net/" target="_blank" rel="nofollow">ASP.NET</a> MVC (as web framework)
* <a href="http://asp.net/" target="_blank" rel="nofollow">ASP.NET</a> Web API (REST-full API services)
* AngularJS (for UI)
* Entity Framework, Entity Framework Migrations (persistent layer)

The base platform can be used for new module development or as a starting point for creating your own custom solution or product. Platform contains such functionality as:

* users and roles management
* security based on <a href="http://asp.net/" target="_blank" rel="nofollow">ASP.NET</a> Identity
* module based extensibility, versioned  system, each module may expose new API, UI views, security permissions, settings and database changes
* notifications system
* background process execution and scheduling (based on Hangfire library)
* single-page application UI (angularJS)
* horizontal scrolling blade-based navigation
* HTML5 compatible UI theme
* API for uploading files
* widget based UI extension system
* built-in settings system allows creating and managing settings without any coding
* caching extension providers

Virto Commerce Platform is a base for Commerce Manager and extended by core commerce modules to provide full e-commerce capabilities.

## Security Role Management

Added support for security roles management. You are now able to create new roles with assigned permissions, then assign roles to security accounts.

![](assets/images/blog/untitled_a.png)

Assigning permissions in role management blade.

Also each module can define its own, additional permissions and they will be automatically available in role definition UI. Permissions are defined inside module’s manifest file.

## CMS module

Themes, pages and menu CMS modules were combined in one module. New menu was added in Commerce Manager named “Content", that simplifies working with CMS.

![](assets/images/blog/untitled_b.png)

Now user can quickly start working with active theme, preview and modify it.

![](assets/images/blog/base64740912136ac9498d.png)

Themes list blade now has new buttons for working with themes. Active theme is marked with triangle in right top corner in themes list.

![](assets/images/blog/base64b7b7619796d1b6b8.png)

Pages list blade has new representation of pages.

![](assets/images/blog/base64a3e318be8f82ac39.png)

![](assets/images/blog/base6464e73add01384d5f.png)

Additional content types (images, archives, etc…) are now supported.

## Dashboard

New engine for tiles. Now every user can have individually positioned tiles. It’s as simple as drag-dropping a tile to the desired location. And that’s not only in dashboard but in every blade where tiles are available (product details, store details, etc.).

![](assets/images/blog/base646e40a34dfd2bb71e.png)

“Seo” tile repositioning inside product detail blade.

## FrontEnd

All security logic was moved from frontend to WebAPI security level. Implemented merging of anonymous and customer shopping carts after login. Fixed variation selector on product page - variant’s images, price etc. are matched with selected variant and switching between store’s currencies. Implemented display of dynamic content (such as different banners) on frontend.

![](assets/images/blog/untitled_c.png)

## Zendesk integration

One more integration module. This one is for getting information from Zendesk helpdesk and showing open tickets in VirtoCommerce Customer view blade as a widget. It’s the first step of integration. The plan is to create Zendesk App in order to pass information about customer and order to Zendesk dashboard.

## Zapier integration

Integration with Zapier allows VirtoCommerce solution to interchange data with outside systems using Zapier. We have implemented two triggers “New Customer” and “New Order”. That allows to pass information about customers and orders to 3rd-party systems. Also we implemented “New Customer” action, so that new customers can be imported automatically from the 3rd-party systems using Zapier Zap. In future releases we plan to add more triggers and actions on demand. The next challenge regarding Zapier integration is to make API available to public.