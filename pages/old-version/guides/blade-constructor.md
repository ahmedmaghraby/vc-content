---
permalink: guides/blade-constructor
layout: guides
date: 2015-10-12T14:25:02.197Z
priority: 4
---
        <div ng-controller="TestController">
            <header class="header" role="banner">
                <div class="responsive">
                    <img class="logo" src="themes/assets/guides/images/logo.png" alt="VirtoCommerce Platform">
                    <h1 class="header-t">Blade constructor 1.2</h1>
                    <p class="header-text">Virto Commerce Platform</p>
                </div>
            </header>
            <article class="main __responsive" role="main">
                <div class="navbar">
                    <ul class="menu">
                        <li class="menu-item __selected" data-type="blade_constructor">
                            <a class="menu-link">Blade constructor</a>
                            <ul class="menu __sub">
                                <li class="menu-item __t">
                                    Blade head
                                </li>
                                <li class="menu-item">
                                    <div class="form">
                                        <div class="form-group">
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeHeadError" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Error</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeHeadProgress" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Progress</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeHeadNav" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Navigation</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeHeadIcon" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Icon</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeHeadTitle" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Title</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeHeadDescr" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Description</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeHeadToolbar" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Toolbar</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="menu-item __t">
                                    Blade container
                                </li>
                                <li class="menu-item">
                                    <div class="form">
                                        <div class="form-t">General</div>
                                        <div class="form-group">
                                            <div class="form-control __radio">
                                                <label class="form-label">
                                                    <input checked name="bladeSize" id="bladeSizeNormal" type="radio">
                                                    <span class="check"></span>
                                                    <span class="name">Blade size Normal</span>
                                                </label>
                                            </div>
                                            <div class="form-control __radio">
                                                <label class="form-label">
                                                    <input name="bladeSize" id="bladeSizeMedium" type="radio">
                                                    <span class="check"></span>
                                                    <span class="name">Blade size Medium</span>
                                                </label>
                                            </div>
                                            <div class="form-control __radio">
                                                <label class="form-label">
                                                    <input name="bladeSize" id="bladeSizeLarge" type="radio">
                                                    <span class="check"></span>
                                                    <span class="name">Blade size Large</span>
                                                </label>
                                            </div>
                                            <div class="form-control __radio">
                                                <label class="form-label">
                                                    <input name="bladeSize" id="bladeSizeXLarge" type="radio">
                                                    <span class="check"></span>
                                                    <span class="name">Blade size Xlarge</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerStaticTop" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Static top</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-control __radio">
                                                <label class="form-label">
                                                    <input checked name="staticType" id="bladeContainerStaticNormal" type="radio">
                                                    <span class="check"></span>
                                                    <span class="name">Static normal</span>
                                                </label>
                                            </div>
                                            <div class="form-control __radio">
                                                <label class="form-label">
                                                    <input name="staticType" id="bladeContainerStaticCollapsed" type="radio">
                                                    <span class="check"></span>
                                                    <span class="name">Static collapsed</span>
                                                </label>
                                            </div>
                                            <div class="form-control __radio">
                                                <label class="form-label">
                                                    <input name="staticType" id="bladeContainerStaticExpanded" type="radio">
                                                    <span class="check"></span>
                                                    <span class="name">Static expanded</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerBreadcrumbs" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Breadcrumbs</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerSearch" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Search</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerSearchCount" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Search count</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerStaticBot" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Static bottom</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerStaticButton" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Button</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-t">Content</div>
                                        <div class="form-group">
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerTable" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">Table</span>
                                                </label>
                                            </div>
                                            <div class="form-control __checkbox">
                                                <label class="form-label">
                                                    <input id="bladeContainerList" type="checkbox">
                                                    <span class="check"></span>
                                                    <span class="name">List</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>  
                <div class="content" ng-controller="TestController">
                    <section class="cblade">
                        <h1 class="title" id="blade_constructor">Blade constructor</h1>
                        <div class="note">Create your own blade</div>
                        <div class="example __center __bg __construct">
                            <div id="tplblade"></div>
                        </div>
                        <pre class="code __construct language-markup"></pre>
                        <div id="result" style="display: none;"></div>
                    </section>
                </div>  
            </article>
            <footer class="footer">
                <img class="logo" src="themes/assets/guides/images/logo.png" alt="VirtoCommerce Platform">
            </footer>
        </div>
