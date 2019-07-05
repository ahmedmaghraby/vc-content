---
category: virtocommerce-news
date: '2017-05-01'
permalink: blog/new-features-in-virtocommerce
main-image: ../../assets/images/blog/update.jpg
excerpt: What’s in the works – New features coming up in the Virto Commerce platform.
tags:
  - technical-leadership
  - ecommerce
  - enterprise-ecommerce
  - features
  - virtocommerce
title: What’s in the works – New features coming up in the Virto Commerce platform
---
### What’s in the works – New features coming up in the Virto Commerce platform 
<img src='../../assets/images/blog/update.jpg'>

What’s more exciting for a software developer than to talk about all the cool stuff that’s in the works? That’s right – nothing! So, let’s talk about what we have in store for you. There are four major feature updates recently added or coming up soon. 

**Product Recommendation Feature**

The <a href="{{ '/glossary/product-recommendation-engine' | absolute_url }}"> Product Recommendation</a> Feature is one of our most recent pre-releases and is now being tested. The feature uses machine learning and data science principles to analyze a customer’s shopping behavior and filter products by predicting, what might interest them. 

It connects your existing users with the right items in your catalog that they might not have found otherwise; helping you personalize buyers’ experience, boost sales and increase customer retention.

You can find all the details and a lot of additional information about it in our recently released special blog article dedicated to this feature. [Click here to view the full article]( https://virtocommerce.com/blog/virtocommerce-releases-product-recommendation).

**Elasticsearch**

{Elasticsearch - https://www.elastic.co/} is a component that lets you do very fast full-text searches in all kinds of documents in many languages. It saves whole objects, provides scalable search in near real-time, and supports multitenancy. 

Elasticsearch achieves faster responses by searching an index instead of going through the text directly. It uses [Apache Lucene](https://lucene.apache.org/) to create and manage the “inverted index” – essentially it’s like finding pages in a book that contain a certain keyword by scanning the index on the book cover, as opposed to going through every word on every page. With its features and upgrades it can basically function as kind of a schema-less JSON datastore, where you can access the data through either search queries or regular database CRUD commands.

It also provides analyzers and categorizers that let you find items almost instantly - you can use ratings, scores and relevant results to aid your search. 
Elasticsearch is a great solution for your datastore, especially if hardware capability is not an issue for your business! It is fully compatible with our <a href="{{ '/b2b-ecommerce-platform' | absolute_url }}">Virto Commerce platform</a> and recommended by our team. 

From the business point of view however, the downside of it is that it doesn’t work as a service, so you need an actual physical machine to run it, which means additional investments in hardware.

This is why we are now working on implementing [Azure search](https://azure.microsoft.com/en-us/services/search/) in addition to Elasticsearch into our product.

**Azure search**

As mentioned above, the next step that we’re actively working on right now is adding compatibility with [Azure search](https://azure.microsoft.com/en-us/services/search/) to the Virto Commerce platform. That would allow us to provide it as a service, giving you all benefits of the Elasticsearch described earlier without the need to invest in additional machines. 

Once this step is complete, we will be able confidently claim that Virto Commerce is now all-cloud and fully Azure-ready! 
Azure search does everything that Elasticsearch can do, and it does it in the cloud. This means less adjusting, and no virtual machine needed. It also makes it cheaper to manage, monitor and scale. 

**Content publishing**

Another exciting feature we absolutely cannot wait to share is Content publishing. It is essentially a publishing process of a product catalog – a system that allows evaluating product readiness, tracking product versions and publishing product cards. 

This new feature will automatically check if all the data related to a certain product has been entered into the database and proceed with publishing it in the catalog once the evaluation comes out positive. It will allow a user to implement customizable metrics that show percentage of the information entered in the product card (ex. price, description, photo, etc.) and determine its readiness for publishing. That way a product manager will be able to look at the overall product list and right away see the stage of each product card.

Currently we’re providing a generic solution with the most commonly used <a href="{{ '/product-information-management-software' | absolute_url }}">product information</a> fields, but when adapting the Content Publishing feature to your specific store on the Virto Commerce platform, you will be able to customize those according to your specific needs – add/remove fields and set, which (and how many) of them being filled makes the product publishing-ready.

Here is another amazing thing about this new feature – it introduces the concept of channels. Because in real life, if the catalog is set up correctly, no one really works with the full catalog at all times - most likely you use a certain scenario.

*For example, our client [Proffsmagasinet](http://www.proffsmagasinet.se/) that sells work tools across several Scandinavian countries uses the same overall catalog for Sweden, Norway and Finland. So, each product in the catalog has a description available in Swedish, Norwegian and Finnish. The product manager of the Swedish store however is not really concerned with whether or not the product they sell in Sweden has a description Norwegian - as long as all the info is filled in Swedish, the product is ready for this store.* 

Channels address this - the products can now be filtered by channel (i.e. Swedish branch). This concept allows you to set different languages, prices, assortment, etc. for different locations and branches of your store and evaluate the product readiness for each of them separately.

In about 2 weeks we will finish development of this feature and pre-release the test version – stay tuned for release updates! 

Our next step in development of the Content Publishing will be implementing the approvals feature. With that a manager will be able to view the product list, filter it by channel, check readiness of certain product cards and approve them for publishing. After that we will move on to creating product versions. This feature will mainly be useful for bigger companies. It will let you see the changes made in the product card.

With this brief overview we wanted to give you a taste of what we have coming your way. We are very excited about these and hope that now you are, too! We’ll keep posting updates on how they are coming along. 

Meanwhile, the first version of the Product Recommendation feature is already [available for download on GitHub](https://github.com/VirtoCommerce/vc-module-product-recommendations) and we’d love to hear some feedback!
