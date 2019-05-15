---
author: VirtoCommerce
category: release
date: 2016-12-26 10:00
excerpt: We are pleased to announce a new Virto Commerce module for managing sitemap XML files!
permalink: blog/sitemaps-module-release
title: Sitemaps module release
tags: [virtocommerce, announcements, ecommerce, enterprise-ecommerce, features, open-source, sitemaps]
---
We are pleased to announce a new Virto Commerce module for managing sitemap XML files!

Sitemaps are an easy way for webmasters to inform search engines about pages on their sites that are available for crawling. In its simplest form, a Sitemap is an XML file that lists URLs for a site along with additional metadata about each URL (when it was last updated, how often it usually changes, and how important it is, relative to other URLs in the site) so that search engines can more intelligently crawl the site.

Web crawlers usually discover pages from links within the site and from other sites. Sitemaps supplement this data to allow crawlers that support Sitemaps to pick up all URLs in the Sitemap and learn about those URLs using the associated metadata. Using the Sitemap protocol does not guarantee that web pages are included in search engines, but provides hints for web crawlers to do a better job of crawling your site.

Virto Commerce provide multiple sitemap files, each sitemap file must have no more than 10,000 URLs (by default, maximum value - 50000 URLs) and must be no larger than 50MB (52,428,800 bytes). Each sitemap file will be placed in a sitemap index file "sitemap.xml". In case of sitemap file has more than maximum records number it will be separated to several sitemap files, i.e.: "products.xml" sitemap file with 15000 records will be transformed to "products--1.xml" (10000 records) and "products--2.xml" (5000 records). Each of these partial sitemap files will be included in sitemap index file too.

<img src="assets/images/docs/sitemaps-3.png" />

You can find more information and the sitemaps module user guide in the corresponding [Virto Commerce documentation article](https://virtocommerce.com/docs/vc2userguide/sitemaps).