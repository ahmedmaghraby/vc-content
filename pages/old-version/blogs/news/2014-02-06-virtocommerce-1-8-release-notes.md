---
author: VirtoCommerce
category: release
date: 2014-02-06 16:35
excerpt: Another a month of hard development we have yet another exciting release here at Virto Commerce. 
permalink: blog/virtocommerce-1-8-release-notes
tags: [assets, azure cloud, ecommerce, html5, localization, release, reporting, seo]
title: "Virto Commerce 1.8 Release"
---
Another a month of hard development we have yet another exciting release here at Virto Commerce.

Here is the list of new features:

* **SEO** – long awaited feature is finally here, implemented to strict SEO optimization techniques
* **Reporting Module** – create and display reports from any datasource, including Virto Commerce (for both on-premise and in the cloud deployments)
* **Improved Asset Manager** – upload files, create folders (for both file based and azure storage)
* **Localization export** – export to CSV and
* Other improvements – from bug fixes to deployment script improvements

## What’s next?

We currently working on the following features:

* Improved logging and troubleshooting scenarios
* New deployment and configuration guide for both on-premise and cloud
* Moving to EF6 and MVC5
* New features in promotion engine, new use cases will be supported
* Better filtering of users and admin users in admin
* Export to CSV implementation for catalog and other modules
* HTML5 admin site
* Admin Localization 

Let us know at [http://help.virtocommerce.com/support/discussions/forums/264127](http://help.virtocommerce.com/support/discussions/forums/264127) if you’d like certain feature to be included in our roadmap.

## SEO implementation

The SEO in frontend allows to control how the URL for store, category and item looks like for selected language and also what page title, Meta description, Meta keywords should be used.

The URL is always converted to be unique by adding missing parts and converting codes to keywords where possible. When filtering results, SEO engine makes sure that filter parameters are added to the URL in the exact same order. That insures that only one exact URL can be used to access the page. For example you will have URL of format: [http://demo.virtocommerce.com/Electronics/en-US/cell-phones?terms=Brand%3aSamsung%3bprice%3a200-600](http://demo.virtocommerce.com/Electronics/en-US/cell-phones?terms=Brand%3aSamsung%3bprice%3a200-600), notice position of brand and price filters. In many other e-commerce products and sites, you can switch those parameters and have a URL of type [http://demo.virtocommerce.com/Electronics/en-US/cell-phones?terms=price%3a200-600%3bBrand%3aSamsung](http://demo.virtocommerce.com/Electronics/en-US/cell-phones?terms=price%3a200-600%3bBrand%3aSamsung) (notice price and brand filters switched position), it is slightly different but will affect your SEO rating. In Virto Commerce that will never happen, even if you type incorrect URL, engine will automatically redirect you (or search indexer) to the correct one.

User can skip store or language, or navigate to item by not using full path of category. Also old way of accessing products and categories work (ex `/p/{itemCode}` or `/c/{categoryCode}`) which is converted to SEO friendly URL automatically. Navigating categories is also simplified by using paths. In our sample data all items have SEO friendly keywords.

![](assets/images/blog/clip_image002b.jpg)

To edit SEO keywords Commerce manager, the SEO tab was added to Item, Category and Store edit views. The friendly hyperlink can be tested right from the same view. 

![](assets/images/blog/clip_image002a.gif)

## Reporting

We are introducing new reporting module in Virto Commerce manager. Module works directly with Sql server reporting service (SSRS) reports files (RDL format – <a href="http://technet.microsoft.com/en-us/library/ms155062.aspx" rel="nofollow">http://technet.microsoft.com/en-us/library/ms155062.aspx</a>). That means reports can be created with SSRS Reports Builder and uploaded directly to VC manager. However it is not using SSRS for generating reports data. Reports datasets are prepared by VC services. 

Used Microsoft Report Viewer component allows not only to print, bet export report data to PDF, Excel or Word files.

![](assets/images/blog/clip_image004b.jpg)

Report preview and its parameters input form

## Preparing reports

Reports can be created with Microsoft SQL Server 2008 R2 Report Builder 3.0: <a href="http://www.microsoft.com/en-us/download/details.aspx?id=6116" rel="nofollow">http://www.microsoft.com/en-us/download/details.aspx?id=6116</a>

All main features of RDL is supported, like page layout, report and datasets parameters, values expression.

However there are few things, that VC treats differently than SSRS:

* Data source definition. VC uses data source name to resolve its connection string to database by looking to its own settings. If such exists, then VC will use own defined database. If not then connection defined in report will be used. So it is similar to SSRS shared connection feature which is not supported by VC. 
* Report parameters. Before generating report, VC like SSRS will ask to fill defined parameters with appropriate values. VC has own realization of UI which is very similar to SSRS. Still not all feature are implemented yet, like multi value selection and providing available values from datasets. 

## Manage reports 

Report files can be uploaded to VC by using asset manager. There is a button Manage in reports view which shows asset manager. You can upload reports files, rename or delete them. Also it is very useful feature to create folder and upload files to specified one. This will allow to place reports in hierarchical structure. There is a tree control in reports view which allows to filter reports list by selecting needed branch.

![](assets/images/blog/clip_image006c.jpg)

Asset manager works seamlessly with both storage types: Azure blob storage and OS file system.

![](assets/images/blog/clip_image008c.jpg)

## SEO data import

SEO import option has been added to the catalog import job types. So SEO values can be imported during catalog structure import to the system.

![](assets/images/blog/clip_image004a.gif)

Frontend localization has become an easier task. The “export” button has been added. Just select the source and the target languages, click “export” button and save the exported data to the CSV file. Open it in any text editor, translate all the text in batch and use import functionality to import the translation back to the system. No need to go through all the values in the Commerce Manager Localization tab.

## Localization settings fix

The issue with not showing localization list for the general (two characters) locales has been fixed.

## Login improvements

The login view has been refactored to add per field validation. Also “hint” button has been added to the password textbox to prevent misspelling errors entering the password.

![](assets/images/blog/clip_image008.gif)

## Forgot Password

A forgot password function is now available in front end. It uses new email template that can be configured in CM.

![](assets/images/blog/clip_image0041a.jpg)

First go to login and click forgot password link and enter your email/username and click submit.

![](assets/images/blog/clip_image0061a.jpg)

The email is generated and sent to user:

`Firstname Lastname,
To change your password, click on the following link:
http://localhost/store/en-us/account/resetpassword?token=eohkovl2r3wn3as9-nf9vq2
Best Regards,
Virto Commerce.`

The expiration of token is 24h. After opening the link new password can be set: 

![](assets/images/blog/clip_image0081a.jpg)

## Color Filtering

Colors can now be filtered using color selection boxes.

![](assets/images/blog/clip_image010b.jpg)

![](assets/images/blog/clip_image012c.jpg)
