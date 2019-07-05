---
author: VirtoCommerce
category: virtocommerce-news
date: 2013-12-06 21:49
excerpt: You developed and launched an e-commerce site and now wondering, can my site handle the traffic?
permalink: blog/handling-cyber-monday-traffic-part-1
tags: [architecture, performance, scalability]
title: "Handling Cyber Monday Traffic–Part 1"
---
## Introduction

You developed and launched an e-commerce site and now wondering, can my site handle the traffic? What happens if it doesn’t, do I have a backup plan? What if that new marketing campaign generates 10x more traffic than we predicted? What if it generates 10x less traffic? Do I still need all those servers or can I simply turn then off.

All these questions arise in various times when running e-commerce sites. It is especially true during such events as Cyber Monday or holidays your business is targeting (Valentines day for gifting site for example).

So how do you prepare? This post goes through the common scenarios from the software architect prospective.

## Preparation

If you don’t want to look like engineers of <a href="http://healthcare.gov" rel="nofollow">http://healthcare.gov</a> or <a href="http://walmart.com" rel="nofollow">http://walmart.com</a> on Cyber week, here are some helpful steps you want to do to get your e-commerce site prepared for a big load (I know, I know, they had to deal with a lot of bureaucracy). I’m not claiming to build walmart site here, it takes much more effort and planning to make sure you can support such site, mostly due to heavy integration with backend/outdated systems. Anyway, back to preparation.

## Load Testing

Load Testing is a process of generating traffic by means of automatic tools like VS.NET Web Load tests or many varieties of java based tools. This has to be done even when you are using existing platform or product, since certain code has been customized, you might find a lot of bottlenecks and issues during first couple of tests.

![](assets/images/blog/tmpa71.png)

The screenshot above shows our internal load test done against the demo site installed in azure environment. You can find that test in source code solution under “Performance.FunctionalTests” project.(note: you will need VS.NET edition that supports Web Load Tests).

The main parameters you should watch out for are Requests/Sec (in screenshot it is 52.6), Avg. Page Time and User Load.

**Requests/Sec** are all different users hitting the site at the same time. 52.6 requests per second translates to about 205k requests per hour or almost 5 million requests per day. Of course it is not a real scenario, for a lot of sites most of the traffic happens during particular hours of the day, it is not evenly spread over 24h period.

**Avg. Page Time** is good characteristic that will tell how snappy and fast the site looks to a user. For a good performing site that value should be below 1 second.

**User Load** is a concurrent number of users/threads requesting pages. These are not your typical internet users. Internet users have certain delay between each request, the automated users in this test push one request after another without any wait. That wait is referred to as think time and can be configured. Typically user is considered active if he/she requests a page within 5 minutes (Google Analytics). The common value for think time" is between 10 and 120 seconds if you want to emulate real traffic. I prefer to put no think time to get a pure performance numbers.

## Handling more load

This particular test environment that we ran our test against is 1 small instance web server, 1 azure standard SQL instance and 1 small instance search server (in azure small instance is 1 Core, 1.75 GB memory VM). Most of our load is on web server, so lets see how we can scale them.

Since our test environment is running on azure, lets try to scale it and run the load tests again. To scale, all you have to do is login into azure, go to services and click scale tab. Change instance count from 1 to 2, it will take a minute or two for azure to provision new instance and now you will have 2 web servers.

![](assets/images/blog/tmp2cd2.png)

Now lets start the tests again and see what happens. As you might notice from the screenshot below, the requests per second grew to an average of 83.6 with 284 concurrent users. The page response time went overboard (mostly due to client machine broadband limitation).

![](assets/images/blog/tmp4fcc.png)

## Automatic Scalability

There are also advanced settings related to scaling instances based on various loads (CPU load and Queue load) or simply on schedule which is great when you know the hours you have the most demand.

Scaling by CPU load is self explanatory and is simply done when CPU reaches certain threshold.

Scaling by Queue however is a unique feature available in azure and allows you to scale your backend systems based on how many items are sitting in a queue. This can be used for example when processing orders or insurance application, especially when CQRS (Command–query separation, we will go into more details during next part) feature is implemented. Basically when order is created, it is immediately put into the queue for further processing (authorizing credit card, settling inventory, pushing order to backend processing systems and so on). That queue can be small or large based on the time of day and the services (VMs) that are responsible for processing orders can either be very busy or doing nothing. In this case, you can automatically increase number of servers processing the requests in parallel when load is high and reduce when it is low.

![](assets/images/blog/tmpce34.png)

## Schedule Scalability

This allows to scale the system to certain levels during periods of time. If your traffic is very consistent and you know when heavy load comes, you can pre scale your infrastructure so no user is experiencing delays while system auto scales.

![](assets/images/blog/tmpf043.png)

## Availability

Adding another server also improves our availability, now if instance 0 or 1 goes down, our website still stays up. You should always at a minimum have 2 servers running a site. Both in on-premise (using load balancer) and in azure deployed solutions.

## What’s Next

In the upcoming parts I’ll cover the following concerns:

* caching
* full page caching
* database clusters
* non SQL databases (mongo db, azure tables, cassandra)
* CQRS (Command–query separation)
* Geo location/replication
* Azure Queues, blobs
* Hadoop, Elastic Path and how create personalized content and pricing

We’ll also go through Virto Commerce architecture and how the above concepts has been addressed.