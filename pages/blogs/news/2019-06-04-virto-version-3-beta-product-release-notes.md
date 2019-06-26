---
author: VirtoCommerce
category: virtocommerce-news
date: '2019-06-04'
permalink: blog/virto-version-3-beta-product-release-notes
main-image: ../../assets/images/blog/virto-version-3-beta-product-release-notes.png
tags:
- virtocommerce
- beta
- release
title: Virto Version 3 Beta Product Release Notes
excerpt: Virto Commerce is pleased to release the beta version of its platform, Virto Commerce Version 3. This release provides
---
<strong class="text">Executive summary</strong>
<p class="text">
    Virto Commerce is pleased to release the beta version of its platform, Virto Commerce Version 3. This release provides innovative advancements in core architecture, increased
    speed, and new or improved modules. Business users will appreciate the benefits of decreased time to market for the solution – allowing faster uptime for transactions.
</p>
<strong class="text">What were our objective when starting development project on VC platform v3?</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        Change primary technology stack to .NET Core for the platform application and all key modules.
    </li>
    <li>
        Eliminate known technical and architecture design issues of 2.x version (Caching, Overloaded core module, Asynchronous code, Platform simplification, Extensibility,
        Performance, Authentication and Authorization) 
    </li>
    <li>
        Provide easy and clear migration from 2.x version by preserving complete backward compatibility for API and Database schema
    </li>
    <li>
        The platform and 18 core modules were planned to be migrated.
    </li>
</ul>
<p class="text"> These Virto Commerce Release Notes below are a subset of the larger list of changes in migration to ASP.NET Core.</p>
<strong class="text">What does Virto V3 provide to developers and architects?</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        Improved extensibility and unification to increase the development speed and decrease time to market.
    </li>
    <li>
        Unified architecture and usage of solid architectural principals leads to shorter learning curve for developers who are new to working with Virto Commerce
    </li>
</ul>
<strong class="text">What technological stack did we apply?</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        <strong>.NET Core, ASP.NET Core 2.2</strong> as base framework
    </li>
    <li>
        <strong>EF Core 2.2</strong> as primary ORM
    </li>
    <li>
        <strong>ASP.NET Core Identity 2.2</strong> for authentication and authorization
    </li>
    <li>
        <strong>OpenIddict 2.0.0</strong> for completely support of all OAuth authorization scenarios and OpenID Connect server
    </li>
    <li>
        <strong>WebPack</strong> as primary design/runtime bundler and minifier for JS scripts and styles
    </li>
    <li>
        <strong>Swashbuckle.AspNetCore.SwaggerGen</strong> for Swagger docs and UI
    </li>
    <li>
        <strong>SignalR Core</strong> for push notifications
    </li>
    <li>
        <strong>AngularJS 1.4</strong> still be as primary framework for SPA
    </li>
    <li>
        <strong>HangFire 1.6.21</strong> for run background tasks
    </li>
</ul>
<strong class="text">What architectural changes were implemented?</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        Configuration: NET Core configuration paradigm (configuration providers and POCO classes IOptions) replaces old .NET Framework Configuration
    </li>
    <li>
        Dependency Injection: Unity DI is replaced with build-in .NET Core DI Microsoft.Extensions.DependencyInjection
    </li>
    <li>
        Persistent infrastructure: EF Core, async queries and commands, DB context triggers for aspect operations, TPH inheritance policy
    </li>
    <li>
        Localization: permissions and settings now are localizable
    </li>
    <li>
        Caching: CacheManager to ASP.NET in-memory is replaced with cache dependencies
    </li>
    <li>
        Modularity: powered by the new dynamic assembly loading in .NET Core; significant module manifest changes
    </li>
    <li>
        Platform permissions, settings and dynamic properties: the new definition and registration
    </li>
    <li>
        Bundling and minification: use Webpack + npm
    </li>
    <li>
        Make all as asynchronous: DAL and Domain services, API controllers
    </li>
</ul>
<strong class="text">Platform changes</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        Solution changes: solution structure, startup.cs
    </li>
    <li>
        Authorization and Authentication: migrate to ASP.NET Core Identity membership and OpenIddict OpenID Connect server
    </li>
    <li>
        Platform manager UI changes: small redesign and layout changes
    </li>
</ul>
<strong class="text">What was changed in modules?</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        Core module: CoreModule.Domain project is terminated
    </li>
    <li>
        Marketing module changes: new serialization logic for expressions
    </li>
    <li>
        Catalog module changes: get rid of WEB model and add possibility for model extension
    </li>
    <li>
        Lucene search module: migration to new version of search engine Lucene .NET 4.8
    </li>
    <li>
        Image Tools module: switch from Windows Component dependency for Images transformation to another library .NET Standard compatible
    </li>
</ul>
<strong class="text">Which modules were migrated?</strong>
<p class="text">The following <a href="https://github.com/VirtoCommerce/vc-platform-core/tree/master/Modules">modules</a> were migrated</p>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>Cart</li>
    <li>Catalog</li>
    <li>Content</li>
    <li>Core</li>
    <li>Customer</li>
    <li>ImageTool</li>
    <li>Inventory</li>
    <li>Licensing</li>
    <li>Lucene-search</li>
    <li>Marketing</li>
    <li>Orders</li>
    <li>Pricing</li>
    <li>Sitemaps</li>
    <li>Store</li>
    <li>Subscriptions</li>
</ul>
<strong class="text">Which modules were added?</strong>
<p class="text">VirtoCommerce.Notifications module 3.0 includes:</p>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        Functionality which was spread across the system is shifted to dedicated module
    </li>
    <li>
        Manage notification availability for each store
    </li>
    <li>
        Unlimited cannels types for sending notifications
    </li>
    <li>
        Possibility to activate/deactivate each notification individually for each store
    </li>
    <li>
        New flexible extendibility model
    </li>
    <li>
        Allows to preview a notification
    </li>
    <li>
        Support of LIQUID syntax for templates based on Scriban engine
    </li>
    <li>
        The new notification messaged feed allows to search and preview individual messages
    </li>
</ul>
<p class="text">Tax module 3.0</p>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        The tax calculation functionality which was spread across the system is shifted to a dedicated module which is now responsible for tax settings and calculation
    </li>
    <li>
        The new module is a single integration point for third party software and custom extensions
    </li>
</ul>
<p class="text">Shipping module 3.0</p>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        The shipping costs calculation functionality which was spread across the system is shifted to a dedicated module which is now responsible for shipping methods, related
        settings and shipping costs calculation
    </li>
    <li>
        The new module is a single integration point for third party software and custom extensions
    </li>
</ul>
<p class="text">Payment module 3.0</p>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        The payment methods functionality and integrations which were spread across the system are shifted to a dedicated module which is now responsible for payment methods and
        related settings
    </li>
    <li>
        The new module is a single integration point for payment gateways integration
    </li>
</ul>
<p class="text">Search module 3.0</p>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        The new module is a single integration point for search engines integration
    </li>
</ul>
<strong class="text">Which modules were deleted?</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        Smart cashing module
    </li>
    <li>
        Virto Commerce dynamic expression library module
    </li>
</ul>
<strong class="text">Release status note</strong>
<ul class="text" style="margin-left:25px;word-break:break-word;">
    <li>
        We inspire you to try and investigate the new version of the system and give us your feedback
    </li>
    <li>
        This is a beta release, which hasn't been verified on a production project yet
    </li>
    <li>
        We have delivered a simple migration from 2.x version by preserving complete backward compatibility for API and Database schema, while you need for additional efforts in case
        there are custom changes in your current 2.X system. Please follow our migration guide during the migration project.
    </li>
    <li>
        We cannot guarantee the backward compatibility of current the beta version with the final 3.X release
    </li>
</ul>
<strong class="text">Screenshots</strong>
<img src="/assets/images/blog/virto-version-3-beta-product-release-notes-screen1.png" />
<img src="/assets/images/blog/virto-version-3-beta-product-release-notes-screen2.png" />
