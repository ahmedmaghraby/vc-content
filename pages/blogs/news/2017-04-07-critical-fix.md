---
category: important
date: '2017-04-07'
permalink: blog/storefront-critical-update-2017-04-07
excerpt: A cultures related issue has appeared in Virto Commerce after the last update on Azure server operating systems. This article describes how to fix this issue.
tags:
  - virtocommerce
  - ecommerce
  - enterprise-ecommerce
  - critical-fix
  - azure
  - open-source
title: Virto Commerce storefront critical update
---
### Virto Commerce storefront critical update

A cultures related issue has appeared in Virto Commerce after the last update on Azure server operating systems. You can find more detailed information about the problem on <a href="http://stackoverflow.com/questions/41851613/culture-is-suddenly-not-supported-anymore-on-azure-web-app" rel="nofollow">StackOverflow</a>.

<p style="font-family: 'Courier New'">
Unhandled Exception: System.Globalization.CultureNotFoundException: Culture is not supported.<br />
Parameter name: culture<br />
4096 (0x1000) is an invalid culture identifier.<br />
at System.Globalization.CultureData.GetCultureData(Int32 culture, Boolean bUseUserOverride)<br />
at System.Globalization.RegionInfo..ctor(Int32 culture)
</p>

This issue is actual for all Virto Commerce storefront versions under 2.18.0.0 inclusive. In order to fix it, just update your Virto Commerce storefront to version 2.18.1.0 (<a href="https://github.com/VirtoCommerce/vc-storefront/commit/1a36351212b365e70731f622f73e60978332db04" rel="nofollow">the essence of the update</a>).