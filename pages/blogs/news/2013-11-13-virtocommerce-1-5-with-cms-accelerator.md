---
author: VirtoCommerce
category: release
date: 2013-11-13 17:28
excerpt: This release main feature is a CMS Integrated Accelerator. We also improved many other bugs and annoyances reported by our customers. 
permalink: blog/virtocommerce-1-5-with-cms-accelerator
title: "Virto Commerce 1.5 with CMS Accelerator"
---
This release main feature is a CMS Integrated Accelerator. We also improved many other bugs and annoyances reported by our customers.

It includes the following new features and fixes:

* **Release of Virto Commerce CMS Accelerator** (Kooboo) – download it from <a href="https://github.com/VirtoCommerce/vc-kooboo" rel="nofollow">https://github.com/VirtoCommerce/vc-kooboo</a>
* New Announcement Section in Commerce Manager
* SDK Project Configurator Updates
* SDK Installation - fixes to how install handles various scenarios
* Status Indicator Updates - minor updates to various statuses

# What's next?

For the next sprint we are working on many exciting features including moving our development to Github from internal TFS, to allow more community involvement, developing comprehensive tutorial on launching a new store and many other.

# Virto Commerce CMS Accelerator – Kooboo

For the past 6 months we have been working with Kooboo team to create an integrated product that uses Kooboo for the frontend management and Virto Commerce for commerce stuff (catalog management, pricing, orders etc). We went through several internal implementations and couple POCs. As a result we created an integration that is in our opinion offers the most value to both end users and developers.

![](assets/images/blog/tmp1392.png)

Some highlights include:

* All controls use kooboo views to display information, so they can be easily edited through Kooboo interface 
* Virto Commerce uses Kooboo for authentication purpose, while still maintaining roles that are specific to Virto Commerce 
* Product and Category Templates are implemented using Kooboo views and determined (which template to use, based on user context, product viewed or category browsed) by Virto Commerce engine 
* All virto commerce business logic remained intact, so you can easily migrate your application from MVC site to Kooboo and back if needed

We also added the source code of that product into Github at <a hre="https://github.com/VirtoCommerce/vc-kooboo" rel="nofollow">https://github.com/VirtoCommerce/vc-kooboo</a>.

Here are some more specific features that you might find interesting after digging dipper into implementation:

# Kooboo site now represents one store in virto commerce

Site setting custom field is added for this purpose called VCStoreId.

![](assets/images/blog/clip_image002_.png)

# External registration confirmation

After user externally registers using kooboo, she or he is redirected back to custom confirmation page which after pressing confirm button will create account record in VC database. Currently only email address is shown in read-only mode (it cannot be changed as it is used as userId for kooboo membership)

![](assets/images/blog/clip_image004.png)

# Account dashboard and other pages

All account pages were moved to kooboo views. User can change password, edit profile. Account left menu is dynamically created from specific kooboo pages.

![](assets/images/blog/clip_image006.png)

User can edit his First and Last names, email address, age, culture and time zone. The profile is saved both in kooboo profile settings and in Virto Commerce Contact details table.

![](assets/images/blog/clip_image008.png)

Change password is only allowed if user is registered locally (not through external login service). It is standard kooboo plugin without any changes.

![](assets/images/blog/clip_image010.png)

# Announcement Section

Virto Commerce announcements section added to Commerce Manager Dashboard.

![](assets/images/blog/clip_image002__.jpg)

You'll find it on the very right side in the dashboard. It contains the latest news and detailed information is displayed in the browser window.

# SDK Project Configurator Updates

* Validation for New project name was improved to prevent names that will generate error when installing
* Project is allowed to install to existing DB if it doesn’t contain Virto Commerce tables already
* Progress indicator is displayed while DB connection testing is in progress
* Project URL is passed to “Commerce Manager” application login dialog when it’s activated from “Project Manager”
* Design improvements to make sure when wizard is running multiple times old information is not displayed  Many other small fixes

# SDK Installation

The following issues were fixed with installation:

* Install button is not available if no of the install options selected

![](assets/images/blog/base643ac26e4a9c7f683c.png)

* Virto Commerce SDK not installed if it is not selected in the first step
* If Virto Commerce SDK not selected to be installed, the option to start won’t appear in the last screen
* If installation is cancelled or failed there is an link to the installation troubleshooting page and links to the installation log files.

![](assets/images/blog/base64687d6d485df067ae.png)
