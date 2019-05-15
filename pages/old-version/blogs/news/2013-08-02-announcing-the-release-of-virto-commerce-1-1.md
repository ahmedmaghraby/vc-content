---
author: VirtoCommerce
category: release
date: 2013-08-02 21:38
excerpt: Today we released the v1.1 update of the Virto Commerce. This is a big refresh of Virto Commerce and it includes some great new features and enhancements.
permalink: blog/announcing-the-release-of-virtocommerce-1-1
tags: [announcements]
title: "Announcing the release of Virto Commerce 1.1"
---
Today we released the v1.1 update of the Virto Commerce. This is a big refresh of Virto Commerce and it includes some great new features and enhancements. These new capabilities include:

* **SDK Installer Improvements**: improved User Interface for both installer and configuration utility, improved sample data
* **Front End Accelerator**: now supports localization, fuzzy search, better inventory handling and product display, social buttons
* **Returns Merchandise Request (RMA) handling**: condition combo box can be editable at any moment (default value can be changed)
* **Jobs Scheduler**: jobs can now be added and removed in real time without need to restart
* **Tax handling**: added sample data, improved shipping and item based taxes

In addition to these, we also fixed a lot of minor issues and bugs.

All of these SDK enhancements are now available to start using immediately and you can download SDK from [Virto Commerce downloads page](https://virtocommerce.com/download).

Below are more details on new enhancements.

# SDK Installer Improvements

Today’s release makes use of the an improve installation theme, more in line with VS.NET installer. We also fixed minor issues with installer, especially related to being able to compile the generated VS.NET 2012 project. In previous version it had couple references missing.

![](assets/images/blog/tmp10e2.png)
{% comment %}
<div class="card-image mdl-card mdl-shadow--2dp">
    <img src="/assets/cms-content/blogs/vccom/assets/tmp10e2.png" />
    <div class="mdl-card__actions">
        <span class="card-image__description">Test</span>
    </div>
</div>
{% endcomment %}

# Sample Catalog Improvements

We fixed our sample catalog to be more inline with recommended approaches. For example we changed all our purchasable items from type “Product” to type “Variation”. The only “Product” type that remains now is the one that has multiple variations.

![](assets/images/blog/tmp21db.png)

We also corrected the search so products marked not visible are not returned as part of the search, but can be available as an option to pick, for example “Pink” 2GB iPod shuffle.

Property Sets with appropriate properties has been created as part of the sample data:

![](assets/images/blog/tmp62a2.png)

And also displayed in the Front End, where they change dynamically based on variation selected in the screen above:

![](assets/images/blog/tmp1e92.png)

# Frontend Accelerator Improvements

## Localization

The new localization framework has been introduced in the frontend. Now all strings can be easily localized using these simple approach:

`@("There are no results available.".LocalizeHtml())`

Now that string will be automatically retrieved from the resource file or if it doesn’t exist added to it. Virto Commerce supports two ways of storing resources, either in resource file or in the database table. Table approach is enabled by default and allows on the fly localization of the whole site simply by adding new language resource translations into the database directly. In the next release we will be providing tools in the admin console to allow this. For now it can be done by exporting resources into excel file for one language, translating them and then importing back to the database.

![](assets/images/blog/tmpf99f.png)

New language picker is now available on the site as well. It gets languages that are added in the Console Manager for the store. Once the language is added, the resource keys are automatically added to either resource file or database table and simply need to be translated to allow for a site in different language.

![](assets/images/blog/tmp6b08.png)

**Note:** products and categories can already contain multi language properties

## Fuzzy Search

Search has been significantly improved in the current release. You can now search for misspelled words and search will still find products. You can also submit multiple keywords and indexing has been corrected to include all the meta data fields.

![](assets/images/blog/tmp8434.png)

## Social integration

As part of the latest sprint we added social features for the product as site, which allows sharing, like, pin it, tweet, follow and many other actions. Integration is very flexible and be easily adjusted to fit any site design.

![](assets/images/blog/tmpe693.png)

For more information on how this is done, please consult our developer documentation [here](docs/old-versions/vc113devguide/architecture/web-applications/social-buttons).

## Google Analytics

Support for quickly adding google analytics.

![](assets/images/blog/tmp9ebb.png)

For more developer documentation regarding this feature go [here](docs/old-versions/vc113devguide/architecture/web-applications/google-analytics).