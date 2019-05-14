---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: vc-community
authorize: true
---
<section class="enterprise" data-name="section">
    <div class="section-inner responsive">
        <h1 class="section-t">Virto commerce community</h1>
        <h2 class="section-descr">Enterprise e-commerce platform<br />Microsoft .NET developers deserve</h2>
        <div class="section-actions">
            <a href="https://cla-assistant.io/VirtoCommerce/vc-platform" target="_blank" rel="nofollow" class="button white fill width-auto" style="width:auto;">Become a contributor</a>
        </div>
    </div>
</section>
<div ng-app="storefrontApp" ng-controller="communityController" ng-cloak class="vc-comunity">
    <div ng-show="loaded" class="vc-content __responsive">
        <div class="vc-cnt">
            <ul class="list">
                <li class="list-item">
                    <div class="list-inner">
                        <div class="list-img">
                            <img src="resource-ico.png" alt="" class="list-ico">
                        </div>
                        <div class="list-t">Community resources</div>
                        <div class="list-descr">
                            <ul>
                                <li>
                                    <a href="https://github.com/VirtoCommerce" target="_blank" rel="nofollow">Virto Commerce source code</a>
                                    <ul>
                                        <li><a href="https://github.com/VirtoCommerce/vc-platform" target="_blank" rel="nofollow">Platform repository</a></li>
                                        <li><a href="https://github.com/VirtoCommerce/vc-storefront" target="_blank" rel="nofollow">Storefront for ASP.NET repository</a></li>
                                        <li><a href="https://github.com/VirtoCommerce/vc-storefront-core" target="_blank" rel="nofollow">Storefront for ASP.NET Core 2.0 repository</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/docs">Documentation</a>
                                    <ul>
                                        <li><a href="/docs/vc2devguide/getting-started">Getting Started</a></li>
                                        <li><a href="/docs/lessons">Lessons </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/roadmap">Roadmap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="list-item">
                    <div class="list-inner">
                        <div class="list-img">
                            <img src="become-ico.png" alt="" class="list-ico">
                        </div>
                        <div class="list-t">Become a contributor</div>
                        <div class="list-descr">
                            If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill.
                        </div>
                        <div class="list-actions">
                            <a href="https://cla-assistant.io/VirtoCommerce/vc-platform" target="_blank" rel="nofollow" class="button fill">Start</a>
                        </div>
                    </div>
                </li>
                <li class="list-item">
                    <div class="list-inner">
                        <div class="list-img">
                            <img src="become-2-ico.png" alt="" class="list-ico">
                        </div>
                        <div class="list-t">Community support</div>
                        <div class="list-descr">
                            <ul>
                                <li><a href="https://stackoverflow.com/questions/tagged/virtocommerce" target="_blank" rel="nofollow">Stackoverflow channel</a></li>
                                <li><a href="https://gitter.im/VirtoCommerce/vc-platform" target="_blank" rel="nofollow">Gitter channel</a></li>
                                <li><a href="https://github.com/VirtoCommerce/vc-platform/issues" target="_blank" rel="nofollow">Github issues</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="list-item">
                    <div class="list-inner">
                        <div class="list-img">
                            <img src="licence-ico.png" alt="" class="list-ico">
                        </div>
                        <div class="list-t">Get community license</div>
                        <div class="list-descr">
                            Coming soon ...
                        </div>
                        <div class="list-actions">
                            <a href="/vc-community/become-contributor" class="button disable">Start</a>
                        </div>
                    </div>
                </li>
                <li class="list-item">
                    <div class="list-inner">
                        <div class="list-img">
                            <img src="app-ico.png" alt="" class="list-ico">
                        </div>
                        <div class="list-t">Add app to marketplace</div>
                        <div class="list-descr">
                            Coming soon ...
                        </div>
                        <div class="list-actions">
                            <a href="/vc-community/become-contributor" class="button disable">Start</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="vc-sidebar">
            <div class="aside" data-name="profile">
                <!--<div class="aside-t">Profile <span ng-bind="('(completed') + ' ' + (percentage) + ('%)')"></span></div>-->
                <div class="aside-other">
                    <span ng-show="github">
                        <img ng-src="{% raw %}{{ githubUser.avatar_url }}{% endraw %}" width="80" height="" style="border-radius: 50%;" />
                    </span>
                    <span style="font-size: 12pt;font-weight: 700;" ng-bind="user.firstName"></span>
                    <span ng-if="user.organization" ng-bind="'(' + user.organization + ')'"></span>
                </div>
                <p><a href="account/profile">Edit</a></p>
                <!--<p ng-bind="'(Point - ' + points + ')'"></p>-->
                <p><a href="/account/logout">Sign out</a></p>
            </div>
            <!--<div class="aside">
                <div class="aside-t"><img src="so-ico.png" alt=""> Stackoverflow</div>
                <a ng-hide="stackExchange" href="account/externallogin?authType=StackExchange">Link account</a>
                <div ng-show="stackExchange">
                    <p>Name – <span ng-bind="stackExchange.userName"></span></p>
                    <p>Virtocommerce tag rating – <span ng-bind="stackExchange.raiting"></span></p>
                    <p>Answer – <span ng-bind="stackExchange.answers"></span></p>
                    <p>Questions – <span ng-bind="stackExchange.questions"></span></p>
                </div>
            </div>-->
            <div class="aside">
                <div class="aside-t"><img src="gh-ico.png" alt=""> Github</div>
                <a ng-hide="github" href="account/externallogin?authType=GitHub&returnUrl=/vc-community">Link account</a>
                <div ng-show="github">
                    <p>Virto commerce rating – <span ng-bind="rating"></span></p>
                    <p>Pull request – <span ng-bind="github.poolRequest"></span></p>
                </div>
            </div>
        </div>
    </div>
</div>
