---
author: VirtoCommerce
category: virtocommerce-news
date: 2013-08-30 05:06
excerpt: During the last development our demo catalog got more consistent structure.
permalink: blog/two-good-news-catalog-and-localization
title: "Two good news: catalog and localization"
---
Hello All,

We continue to develop our great product even if you are on vacations (I hope you are).

And here is what our team has prepared in the new release.

During the last development our demo catalog got more consistent structure.  All “purchasable” items become of a “Variation” type, when items of type “Product” become not purchasable. If you do not know what is the difference between variation and product it is easy to feel comparing two definitions “<span class="GINGER_SOFATWARE_correct">IPod</span> Shuffle” (product) and “<span class="GINGER_SOFATWARE_correct">IPod</span> Shuffle Red 64GB” (variation) .  By the way other items that can be added to the catalog are Bundle, Package and Dynamic Kit.

We often hear the question: how to organize catalog in the best way. And here is an answer from us:

* Make purchasable items which you want to see in user shopping cart as variations
* Create products only if you want to aggregate some variations for marketing purposes e.g. adjust searching or make a better landing page for dynamic content links
* If variation belongs to product, mark it "store invisible" (it still can be purchasable, but will be accessible from products page)

But do not lose sight of flexibility of Virto Commerce catalog:

* Product also can be made purchasable; can have its own price and can be handled in inventory.
* There is no difference what to create first: product or variation. Variations can exist without product.

You can easily adopt catalog to your company's needs and traditions, it is only a question of Virto Commerce integration into your business. Let's take an example. You want to propose bundle (special offer): concrete shampoo, which is variation, and the non-concrete comb (you want to select a certain comb for shipping in warehouse). In this case you will need to extend the fulfillment module (e.g. with function to select a comb from most attractive leftover stock).

We will return to the integration in our next posts when we will review Virto Commerce extension points.

Another feature that was included in the new release is localization. Let see how to enable new language in the e-store.

* Open Virto Commerce manager
* Create new language. Go to Settings/Application/Settings find Languages, select it, press Edit, add language code, e.g. lt-LT (Lithuanian).
* Add language to store. Go to store, select "Electronics Store", find localization tab, add the Lithuanian language (move it from Available to Selected)
* Add translations for Lithuanian in Virto Commerce manager
* You can see the language bar in the store's right upper corner
* Such way you could localize the store's static content, but also you will need to localize major stores dynamic entities: catalog, payments, taxes and shipping methods.
* Now it is all. Enjoy it. Or "Džiaukitės" in Lithuanian.