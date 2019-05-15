---
author: VirtoCommerce
category: virtocommerce-news
date: 2013-07-12 21:27
excerpt: If you are E-Commerce domain specialist, I believe, that you will be surprised how many features of mature products we are providing right now. And if you are web developer, you will be amazed by VirtoCommerce system’s architecture.
permalink: blog/the-moment-after-big-race-started
title: "The moment after big race started"
---
A week ago we had finally released our SDK: [https://virtocommerce.com/download-sdk](https://virtocommerce.com/download-sdk)

You can explore the product from its documentation as well: [http://virtocommerce.com/docs/old-versions/vc113userguide](docs/old-versions/vc113userguide)

If you are E-Commerce domain specialist, I believe, that you will be surprised how many features of mature products we are providing right now. And if you are web developer, you will be amazed by VirtoCommerce system’s architecture.

We have already received first reviews, first questions and first change requests from our subscribers. The big race was started.

The first review we get: “it is very cool”. I think the same. We have developed the product which is built on the brilliant feats of MicroSoft platform’s engineering: Azure Clouds, Metro UI, ASP.NET MVC, Code First with Entity Framework. Besides, it is very easy to deploy and study this product in action. After installing SDK you will get your first store with sample catalog on your home machine. Minimal requirements are just those that you need for IIS Express, SQL Server Express (SQL Server Express should be preinstalled on your machine, or you can use any available SQL Server near you).

Now we are starting new iteration which goal is to protect our code from degradation. We should be ready to act quickly on our user’s requests. The automatized regression testing, which is integrated into the build process - it is the way how we guarantee safeness of our change-request process. We already have two dedicated build-servers that run various tests at various events. During this iteration we are going to add new tests for testing our data model and also we will introduce new testing approach: ViewModel’s regression tests.

Pay attention to PriceList and Marketing modules in VirtoCommerce manager tool: when assigning price or creating promotion you are able to write complex logical expressions and that makes the configuration extremely flexible. But we are ready to move even more efforts in those areas in short term.

At the end I want to answer the first asked question, which was: why the id attribute of db entities has the type of string when you are using GUID values. The answer is that VirtoCommerce has special service that could generate id for DB entities using quite complex templates (including prefix, encoding date, e.g. Order id “PO……”) but the default realization for almost all entities now is “just return GUID”.

Please test it and send your questions to us!