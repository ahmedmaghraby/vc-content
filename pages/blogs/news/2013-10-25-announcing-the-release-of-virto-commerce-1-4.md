---
author: VirtoCommerce
category: release
date: 2013-10-25 13:56
excerpt: Today we release version 1.4.591 of Virto Commerce. This is a minor release and a result of sprint 18.
permalink: blog/announcing-the-release-of-virtocommerce-1-4
title: "Announcing the release of Virto Commerce 1.4"
---
Today we release version 1.4.591 of Virto Commerce. This is a minor release and a result of sprint 18. It includes the following fixes and new features:

* **New Progress Indicator** - Commerce Manager now shows 
* **Fix to items querying from Virtual Catalog** - tested with millions of products
* **Creating new module documentation** - checkout the guide describing how to create a new module
* Fix: fulfillment inventory tab refresh issue fixed
* Fix: refund amount wasn't calculating correctly when creating new RMA request in admin
* Fix: item and category validation before saving
* Fix: various import issues and improvements
* Fix: improvement to azure deployment scripts
* Fix: azure job scheduler now creates correct blob type
* SDK: improvements to installer and configurator
* Documentation: added object model and other diagrams for catalog system

During the current spring we also introduced new support system and support forums available at [http://help.virtocommerce.com](http://help.virtocommerce.com).

# What's Next?

* CMS Integrated Sample Site Beta Release - we've integrated our e-Commerce package with Kooboo CMS and we'll be releasing public beta in the next few weeks, stay tuned!
* New Responsive mobile design for sample store
* Creating new store step by step tutorial
* More improvements to SDK Installer to make it easier to setup VC
* Public Source Code repository either on codeplex or github

# Progress indicator

A general purpose progress indicator implemented. All long running processes should report their statuses to this progress indicator. Some features:


* Multi-instance. Can display multiple statuses at the same time;
* Multi-purpose. Can receive (and display) messages from different sources;
* Support undetermined and determined states; 
* Both indeterminate and determinate modes supported. A percentage competed can be reported, if working in determinate mode.

Status reporting for Asset upload, Catalog and Category deletion has been added at the moment.

![](assets/images/blog/image.png)

# Large numbers abbreviated on dashboard tiles

Abbreviation rules applied for large numbers on dashboard tiles. Now all numbers will fit in the fixed size dashboard tile:

![](assets/images/blog/image1.png)

# Item and Category validation fixed

Some entities possess logical restrictions that can't be checked at database level. For instance, a product can have a property assigned whose value is marked as required. Now such product is not saved, the faulty tab is activated and invalid property values are marked:

![](assets/images/blog/image2.png)
