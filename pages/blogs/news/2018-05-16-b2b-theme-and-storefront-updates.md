--- 
category: virtocommerce-news
date: '2018-05-16'
permalink: blog/b2b-theme-and-storefront-updates
main-image: ../../assets/images/blog/b2b-theme-and-storefront-updates.jpg
excerpt: The VirtoCommerce team released the latest updates of B2B Theme and Storefront! Check it out in this article.
tags:
- ecommerce
- enterprise-ecommerce
- virtocommerce
title: VirtoCommerce B2B Theme and Storefront – latest updates
---
### <dfn>VirtoCommerce B2B Theme and Storefront – latest updates</dfn>

The VirtoCommerce team has been working long and hard on enhancing and polishing our platform, and we’re thrilled to share some of what we have accomplished! 

Check out the freshly released new versions of the <a href="https://github.com/VirtoCommerce/vc-theme-b2b/releases/tag/v2.0.0" rel="nofollow">B2B theme 2.0</a> and <a href="https://github.com/VirtoCommerce/vc-storefront-core/releases/tag/v3.1.0" rel="nofollow">Storefront 3.1.0</a> and read on for the detailed outline of what to expect.

 We have completely redesigned the previous theme and added many new essential features for enterprise and business solutions.

Here is a preview of what the new B2B theme looks like https://demo.virtocommerce.com/B2B-store/

<h2>B2B theme updates</h2>

<ins>These are main changes in the B2B theme we have implemented with the latest update:</ins>

•	New sign up a process that allows registering as an organization or personal customer.

<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-1.jpg" /></div>

•	New product search options allow filtering based on availability in specified fulfillment centers.

<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-2.jpg" /></div>

•	New cart view and one-page checkout now feature pickup delivery method and display expected arrival date or product availability in selected fulfillment centers.

<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-3.jpg" /></div>

•	New product details view options can show multiple product variations, which facilitates and improves the selecting and buying process.

<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-4.jpg" /></div>

•	New customer cabinet is designed to cover all basic requirements for an organization or customer management such as:	
<ul type="circle">
<li>manage organization members and their roles</li>
<li>invite new members of the organization </li>
<li>edit company information and address</li>
<li>view all employee data, such as orders or personal lists</li>
<li>manage preferences and checkout defaults</li>
<li>create and use unlimited named lists for favorited and planned purchases</li>
</ul>

<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-5.jpg" /></div>
<br>
<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-6.jpg" /></div>

•	The theme is built on the CSS framework Bootstrap 3.0 and has an adaptive markup that allows it to work on mobile devices with small resolutions.

<h2>Storefront updates</h2>

The Storefront has been revamped quite significantly as well. We have added many new amazing features for enterprise and business solutions.

<ins>Here is the list of the most important Storefront changes:</ins>

•	We added permission-based authorization to our storefront that allows users to check permissions and roles defined in the platform.
 
 <small>[Authorize(SecurityConstants.Permissions.CanEditUsers)]</small>

•	Reworked API for working with  lists 

•	Completely reworked authentication/authorization system to work independently from the Core module API. This allows using custom security settings (password strong, or lockout policy) independently of the platform settings.

<small>DELETE: storefrontapi/account/{userId}</small><br>
<small>POST: storefrontapi/account/organization</small><br>
<small>POST: storefrontapi/account/user</small><br>
<small>PUT: storefrontapi/account/organization</small><br>
<small>GET: storefrontapi/account/organization/current</small><br>
<small>POST: storefrontapi/account/organization/users/search</small><br>
<small>POST: storefrontapi/account/{userId}/lock</small><br>
<small>POST: storefrontapi/account/{userId}/unlock</small><br>

•	Added support of user invitation 

<small>POST: storefrontapi/account/invitation</small>

•	Added new methods of managing user accounts and organizations

Please take a few minutes to play around with the latest versions of the B2B theme and Storefront and discover the great new opportunities they offer for your business. 

And stay tuned for more enhancements to the VirtoCommerce platform – our journey of perfecting this software never ends!

<h2>Old B2B theme version 1.0  appearance</h2>

<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-7.jpg" /></div>
<br>
<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-8.jpg" /></div>
<br>
<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-9.jpg" /></div>

<h2>New B2B theme version 2.0 appearance</h2>

<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-10.jpg" /></div>
<br>
<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-11.jpg" /></div>
<br>
<div style="text-align: center;"><img src="../../assets/images/blog/b2b-theme-and-storefront-updates-12.jpg" /></div>
