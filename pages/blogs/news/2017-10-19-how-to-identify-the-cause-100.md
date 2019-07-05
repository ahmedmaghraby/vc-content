---
category: virtocommerce-news
date: '2017-10-19'
permalink: blog/how-to-identify-the-cause-100
main-image: ../../assets/images/blog/how-to-identify-the-cause-100-main.jpg
excerpt: In Virto Commerce, we have multiple apps in an Azure App Service Plan, all different copies of the same app for different clients. Learn how to identify the cause 100% CPU usage in Azure App Service in our new article.
tags:
- ecommerce
- enterprise-ecommerce
- virtocommerce
title: How to identify the cause 100% CPU usage in Azure App Service
---
### <dfn>In Virto Commerce, we have multiple apps in an Azure App Service Plan, all different copies of the same app for different clients. It's either Virto Commerce platform or Storefront ASP.NET MVC app with an SQL database.</dfn>

One morning, we got alert notification from Azure about slow and non-responsive sites, sometimes resulting in a 503 error. Upon checking the CPU/Memory metrics for the App Service Plan we discovered the CPU pegged at 100% for all cores (200% su, of % across all cores).

<div style="text-align: center;"><img src="../../assets/images/blog/how-to-identify-the-cause-100-1.jpg" /></div>

We restarted application and back to normal state.

We had this issue few times in different time and we could not identify the cause because after restart all works as expected. And of course, we had the problem with production only.

It's hard to prove and diagnose, but we found that we can use Azure App Service's Site Control Management dashboard (aka kudu) to profile a process in Azure App Service and get the CPU usage report.

If your process is running slower than expected, or the latency of HTTP requests are higher than normal and the CPU usage of the process is also pretty high, you can remotely profile your process and get the CPU sampling call stacks to analyze the process activity and code hot paths.

<h2><strong>Step 1. Open process explorer</strong></h2>

Go to Azure and open App Service blade and click on Advanced Tools. Advanced Tools provides a collection of developer oriented tools and extensibility points for your App Service Apps. Or navigate to your site's scm endpoint (<yoursitename>.scm.azurewebsites.net).

<div style="text-align: center;"><img src="../../assets/images/blog/how-to-identify-the-cause-100-2.jpg" /></div>

Click on Process Explorer. Here you will see all the processes running in the site's context:

<div style="text-align: center;"><img src="../../assets/images/blog/how-to-identify-the-cause-100-3.jpg" /></div>

<h2><strong>Step 2. Start Profiling</strong></h2>

Click the Start Profiling button for the process you wish to profile, (most likely the w3wp.exe process). Run your scenario or wait few minutes, then click the Stop Profiling button.

After few seconds, the browser should bring up the file download option. Now, you can save diagsession file.

Microsoft doesn’t recommend to run a profiling session for more than one to two minutes because profiling can produce large files. The profiling session will be terminated if a session is started from the kudu site and is running for more than 15 minutes. If your Web App is running on multiple instances, you can connect to the scm <a href="{{ 'https://virtocommerce.com/product-information-management-software' | absolute_url }}">site</a> for the instance you’d like to profile and start a profiling session on that instance only.

<h2><strong>Step 3. Analyze diagsession file</strong></h2>

The generated profile is a .diagsession file can be opened with Visual Studio 2017. 

Once you open a profile in Visual Studio 2017 you will see the all familiar profiling pages where you can easily drill down into specifics of your profiling sessions and locate the bottleneck. Below is our profile session from real <a href="{{ 'https://virtocommerce.com/b2b-ecommerce-platform' | absolute_url }}">Virto Commerce</a> application suffering from a prolonged period of high CPU.  

<div style="text-align: center;"><img src="../../assets/images/blog/how-to-identify-the-cause-100-4.jpg" /></div>

By the way, diagsession file is common zip package with .etl file inside. So, you can rename the extension to a .zip file and open the .etl file inside the zip in any tool which understands ETW events.
