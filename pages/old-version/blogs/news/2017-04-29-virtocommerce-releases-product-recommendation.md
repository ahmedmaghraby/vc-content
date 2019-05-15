---
category: release
date: '2017-04-29'
permalink: blog/virtocommerce-releases-product-recommendation
main-image: ../../assets/images/blog/ai.jpg
excerpt: Virto Commerce team is constantly improving its technical leadership. Our Solutions Architect has just visited the DevOps conference and shared his thoughts on what he has seen.
tags:
  - product-recommendations
  - AI
  - technical-leadership
  - ecommerce
  - enterprise-ecommerce
  - features
  - open-source
  - virtocommerce
title: New Product Recommendation Feature is now available 
---
### New Product Recommendation Feature is now available 
<img src='../../assets/images/blog/ai.jpg'>

#### The Overview

This trend, originally introduced by Amazon, is now quickly conquering the world’s e-commerce market!

The product recommendation feature is essentially a self-educating AI that analyzes a user’s behavior and filters products by predicting how a customer might like them. As Steve Jobs had said - “a lot of times, people don’t know what they want until you show it to them.” This is exactly what the <a href="{{ '/glossary/product-recommendation-engine' | absolute_url }}"> product recommendation</a> feature achieves! It solves the problem of connecting your existing buyers with the right items in your huge catalog, while creating a personalized experience for them, along with that special feeling of going to a familiar store, where friendly assistants Tom and Betty always remember what you like. The feature improves a visitor's experience by offering relevant items at the right place and the right time, which helps you boost sales and increase the number of returning customers.

According to [Matt Marshall’s article](https://venturebeat.com/2006/12/10/aggregate-knowledge-raises-5m-from-kleiner-on-a-roll/) on Venturebeat, Amazon claims that 35% of all product sales are estimated to result from recommendations. 

From the business side of things having this feature also means that instead of having a marketing and sales analyst, who dedicates his entire time to gathering and processing the sales data and forms marketing strategies based on it you can now have an automatic service doing the work and dedicate your precious human resources to further growing your business. 

From the marketing point of view the product recommendation feature can help you understand your customers better by seeing how they browse the catalog, what draws their attention, and how they choose what to <a href="{{ '/glossary/purchase-order-management-software' | absolute_url }}">purchase</a>. It can also provide information you might not have even considered looking at! For example, the time when most of your sales happen, or the right kind of customer for a particular product you are looking to add. Tracking a customer’s journey can provide you with insights on where your interaction with the potential buyer gets stuck, and give ideas on how to fix it.

<img src='../../assets/images/blog/recc.jpg'>

#### The Product Recommendation Feature in Virto Commerce

The only downside of this new technology was that this kind of engine used to require powerful (and expensive!) hardware, making it pretty much inaccessible to most vendors. For a lot of companies, unless they were giant sales platforms, the risks of such investment were simply not worth the potential results.

However, now the product recommendation feature can be offered as a service, and we have created a new module in our platform for it. 
Virto Commerce platform is known for always being on top of the latest trends and for adapting the most useful e-commerce features to the needs of the B2B sector. So, we have been looking into adding the product recommendation AI into our B2B focused product for a while. Mid-March we have started to actively work on implementing it and by the end of the month we have finished developing the first version of the module. 

The pre-release version is now [available for download on GitHub](https://github.com/VirtoCommerce/vc-module-product-recommendations). It currently requires manual installation and you are more than welcome to try it out and tell us what you think! Virto Commerce platform takes pride for being an open-source, so we are always happy to share our latest modules.

Our product recommendation feature is going to work in two modes:

* User-based
* Product-based

We are now mainly focusing on polishing the first one. The system observes and analyzes a user’s shopping behavior and builds recommendations based on what it has learned. The AI’s algorithms are based on several key elements: users’ viewing and purchase history, items they add to the <a href="{{ '/glossary/hosted-shopping-cart' | absolute_url }}">shopping cart</a>, and what other customers with similar behavior have viewed and purchased. 

As a result, when a customer enters the homepage as a registered user, the website shows the products they might like based on what they have bought, considered or viewed before.

During the first sprint session in our development process we tried to understand the main principles of how the system works and adapt them to the needs of our users. We are now testing it and gathering feedback to see what needs improving, so don’t be shy to share! 

It’s important to keep in mind however that the system needs large amounts of data to better see the dynamics and implement them into its self-learning mechanism. Personalizing customer experience is all about the data that the AI can apply to its analytical processes based on data science to maximize the effectiveness of machine learning. The more it learns, the better the recommendations will become.   The system needs a minimum of 1000 events to present an accurate analysis. So, for smaller vendors it might take a while before it starts showing the best results. 

Our next goal is to add the new feature to the Virto Commerce demo and test it on a real live project before summer. 

