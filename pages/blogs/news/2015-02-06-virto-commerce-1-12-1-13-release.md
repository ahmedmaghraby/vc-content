---
author: VirtoCommerce
category: release
date: 2015-02-06 12:31
excerpt: Since we haven’t posted updates for 1.12 release and 1.13 was just launched, this post will contain info on both of them. 
permalink: blog/virtocommerce-1-12-1-13-release-notes
tags: [announcements, architecture]
title: "Virto Commerce 1.12 & 1.13 Release"
---
Since we haven’t posted updates for 1.12 release and 1.13 was just launched, this post will contain info on both of them.

Here is the list of some of new features (you can see more detailed list <a href="https://github.com/VirtoCommerce/vc-community/releases" rel="nofollow">here</a>):

* **Azure SDK 2.4** – we upgrade our elastic path providers to support 1.1.1 version (the previous one was an old 0.29 release). Lots of new functionality added (v1.10)
* **SDK Installer Updated** – it is now more robust and better checks which version of JRE is setup 
* **SEO Improvements** – filter results ability to use “or” filters of type “black” 
* **Category Priority** – you can now change category sorting explicitly in the Commerce Manager
* **Localization for Editorial Reviews** – write product reviews in multiple languages 
* Migrated to Entity **Framework 6.1.1**
* Migrated Security to <a href="http://www.asp.net/identity" rel="nofollow">ASP.NET Identity</a>
* Authorize.NET payment gateway 
* New sequence service – now based on identity column in database
* Razor email templates
* Shipment options and Weight columns are added to Shipment object
* Weight and ParentLineItemId columns are added to LineItem object
* **Run as Azure Website** – PowerShell now deploys site as an Azure Website instead of Service by default
* **Azure Web Jobs** – now can run as part of the Azure Website, eliminating Azure Scheduler Worker Role

## What’s next?

We currently working on the following features:

* Web based Admin/Commerce Manager (checkout progress at [http://demo.virtocommerce.com/admin](http://demo.virtocommerce.com/admin) or check the code in under webadmin branch on github) Multi channel features (eBay, Amazon integrations)
* Multi channel features (eBay, Amazon integrations)
* Additional European payment gateways integrations
* Additional themed frontend site 

We also launched a new Stackoverflow community dedicated to Virto Commerce. Use it Let us know at [http://help.virtocommerce.com/support/discussions/forums/264127](http://help.virtocommerce.com/support/discussions/forums/264127) if you’d like certain feature to be included in our roadmap.