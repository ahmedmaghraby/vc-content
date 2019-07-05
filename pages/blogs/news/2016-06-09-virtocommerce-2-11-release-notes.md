---
author: VirtoCommerce
category: release
date: '2016-06-09'
excerpt: The main focus of this release was the development process change and related source code redesign.
is-trending: true
permalink: blog/virtocommerce-2-11-release-notes
tags: [20, announcements, ecommerce, enterprise-ecommerce, features, open-source, release-notes, seo]
title: 'VirtoCommerce 2.11 Release Notes'
---
The main focus of this release was the development process change and related source code redesign.

![](assets/images/blog/without-source-code-development-process-data-flow-1.png "Developing a custom solution. Data Flow Diagram")

## Modules management

Many changes were made to modules management UI:

![](assets/images/blog/modules.png)

The main modules data source is the (online) module registry. All module versions will be stored there since the 2.11 release. Now you can install or update a VC module instantly after its release and add it to the registry.

Check for more info on [Modules management](docs/vc2devguide/working-with-platform-manager/localization-implementation) tutorial.

## Source code repository restructure

The repository structure has changed dramatically. The <a href="https://github.com/VirtoCommerce/vc-platform" rel="nofollow">vc-platform</a> repository on GitHub was split into multiple repositories having clear and concrete purposes:

* Only a clean VirtoCommerce Platform was left in the vc-platform repository.
* Storefront website now resides on its own <a href="https://github.com/VirtoCommerce/vc-storefront" rel="nofollow">vc-storefront</a> repository.
* Every logical module was isolated from the Platform (and other modules) to its own repository (vc-module-catalog, vc-module-store, vc-module-cart to name a few).

![](assets/images/blog/vc-repository-split.png "vc-community repository structure change")

## Future releases and versioning

2.11 is the last version to release VC Platform, Storefront and Commerce modules all at once and while keeping the identical version number. We'll be delivering "feature based" releases more often so deployers will receive changes and features more quickly.

The version numbers of VC parts should diverge over time.

## Documentation updates

Some new articles appeared on our documentation site covering the long awaited topics for developers:

* [Developing a custom solution](docs/vc2devguide/development-scenarios/developing-a-custom-solution)
* [Working with platform API](docs/vc2devguide/development-scenarios/working-with-platform-api)
* [How to generate module API C# client](docs/vc2devguide/development-scenarios/how-to-generate-module-api-c-sharp-client)
* [Process of custom module contributing](docs/vc2devguide/development-scenarios/process-of-custom-module-contributing)
* [Creating module packages](docs/vc2devguide/development-scenarios/creating-module-packages)
* [Storefront Source Code Getting Started](docs/vc2devguide/deployment/storefront-deployment/storefront-source-code-getting-started)
* [How to localize catalog product names in storefront](docs/vc2devguide/working-with-storefront/how-to-localize-catalog-product-names-in-storefront)

Articles reviewed and updated:

* [Modules management](docs/vc2userguide/configuration/modules-management) tutorial
* [Deploy from GitHub to Microsoft Cloud Azure](docs/vc2devguide/deployment/platform-deployment/deploy-from-github-to-microsoft-cloud-azure)
* [Source Code Getting Started](docs/vc2devguide/deployment/platform-deployment/source-code-getting-started)
* [Creating new module](docs/vc2devguide/working-with-platform-manager/extending-functionality/creating-new-module)
* [Extending Members domain types](docs/vc2devguide/extending-commerce/extending-members-domain-types)

### Migration to ver. 2.11

Migrate your own modules to 2.11 as described in - coming soon:)