---
author: VirtoCommerce
category: release
date: 2015-08-19 15:31
excerpt: In this release we finally implemented long awaited features we always wanted to complete but never had quite enough time to do.
permalink: blog/virtocommerce-2-4-release-notes
tags: [announcements, azure, ecommerce, enterprise-ecommerce, features, open-source, platform]
title: "VirtoCommerce 2.4 Release Notes"
---
In this release we finally implemented long awaited features we always wanted to complete but never had quite enough time to do. These are **API documentation** and **sample stores**. API documentation is not static content, rather it is completely dynamic and generated at run time from the .net classes. It is also connected to our demo store, so you can test it yourself, a very useful feature.

**Sample Stores** offer even more exciting functionality, they allow for the creation of complete starter/sample stores which includes properties, products, promotions, marketing banners, themes, templates, custom settings and more. You can then import these stores and use them right out-of-the-box or as a starting point for your own custom solution. Once you modify anything, you can even export that configuration again to use in the future projects or share with a community. We currently created two samples: **apparel/clothing store** and **electronics store** that you can import during the initial setup. We plan to have a repository of many different types of stores including a software store with digital downloads, subscription based store, <a href="https://virtocommerce.com/b2b-ecommerce-platform" target="_blank">B2B ecommerce</a> store etc. Were also looking to our partners to create and publish custom sample stores in our App Store.

For more details on these and other features read further.

## Automatic REST API online documentation Swashbuckle module

The current module is based on a <a href="https://github.com/domaindrivendev/Swashbuckle" rel="nofollow">Swashbuckle</a> solution used by ApiExplorer and Swagger/swagger-ui and provides a rich discovery, documentation and playground experience to API consumers.

The module contains an embedded version of <a href="https://github.com/swagger-api/swagger-ui" rel="nofollow">swagger-ui</a> that will automatically start up once the Swashbuckle module is installed. This means you can compliment your API with a slick discovery UI to assist consumers with their integration efforts. Best of all, it requires minimal coding and maintenance, allowing you to focus on building an awesome API!

![](assets/images/blog/2-4-pic.png)

## Online sample data discovery based on platform export &amp; import functionality

Replace old SQL scripts based sample data initialization to platform export &amp; import functionality, this allows you to initialize new platform installations with sample data as you wish.

Now you can quickly setup your system using a predefined template.

* There will be new thematic sets of  sample data like a digital products template, new front end, liquid themes, etc. All will be directly available during your platform installation for any platform version.
* All sample data also will be accessible on our <a href="https://virtocommerce.com/apps">App store</a> and can be downloaded and imported to your system manually through platform import.
* JSON sample data format (easy to raw view and make changes and examine)
* All sample data contains binary content (images, themes etc) and you can use it on your resources.
* Built in UI sample data selection wizard and initialization progress with errors log

![](assets/images/blog/sample-data-wizard.png)

![](assets/images/blog/2-4-pic2.png)

## New article for developers: “Blades and navigation”

We have added a new article for developers describing how to deal with VirtoCommerce platform panels (“blades”). Check it out at [VC 2.x Developer Guide: Blades and navigation](docs/vc2devguide/working-with-platform-manager/basic-functions/blades-and-navigation).