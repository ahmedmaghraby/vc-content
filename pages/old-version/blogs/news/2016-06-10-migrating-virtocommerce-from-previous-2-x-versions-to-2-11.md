---
author: VirtoCommerce
category: technical
date: '2016-06-10'
is-trending: true
is-sticked: false
permalink: blog/migrating-virtocommerce-from-previous-2-x-versions-to-2-11
tags: [announcements]
title: 'Migrating VirtoCommerce from previous 2.x versions to 2.11'
excerpt: This article is about migration process from previous 2.x versions of VirtoCommerce platform to 2.11 version on local machine and Microsoft Azure Cloud
---
## On local file system

* Make new platform installation [http://virtocommerce.com/docs/vc2devguide/deployment/platform-deployment/source-code-getting-started](docs/vc2devguide/deployment/platform-deployment/source-code-getting-started)http://docs.virtocommerce.com/display/vc2devguide/Source+Code+Getting+Started and leave old database connection string.
* Make new storefront installation [http://virtocommerce.com/docs/vc2devguide/deployment/storefront-deployment/storefront-source-code-getting-started](docs/vc2devguide/deployment/storefront-deployment/storefront-source-code-getting-started)
* (Optional) If you have some changes in CMS content you need to copy it to 2.11 platform */App_Data/cms-content* folder:
 
> COPY FROM
>
> {storefront 2.x path}\STOREFRONT\VirtoCommerce.Storefront\App_Data\Themes\*.*
>
> excluding default  folder
>
> TO
> 
> {platform 2.11 path}\VirtoCommerce.Platform.Web\App_Data\cms-content.

## On Microsoft Azure cloud

* Make new platform deployment to azure to new or already exist resource group [http://virtocommerce.com/docs/vc2devguide/deployment/platform-deployment/deploy-from-github-to-microsoft-cloud-azure](docs/vc2devguide/deployment/platform-deployment/deploy-from-github-to-microsoft-cloud-azure) without sample data (in sample data installation setup wizard step click None)
* For newly deployed platform version 2.11 set database connection string, just copy the database connection string from a previous VC 2.x application  settings

![](assets/images/blog/azure-application-settings.png)

* Make new storefront deployment  to new or already exist resource group [http://virtocommerce.com/docs/vc2devguide/deployment/storefront-deployment/storefront-microsoft-azure-getting-started](docs/vc2devguide/deployment/storefront-deployment/storefront-microsoft-azure-getting-started)