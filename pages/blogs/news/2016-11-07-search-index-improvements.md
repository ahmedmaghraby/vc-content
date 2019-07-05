---
category: virtocommerce-news
date: '2016-11-07'
is-trending: true
layout: blog-layout
permalink: blog/search-index-improvements
tags:
  - announcements
title: 'Search index improvements'
---
## Search index improvements
Most of the data has to be indexed before showing up on your Storefront website. The background processes are constantly indexing the items to keep the site up to date. Despite this, there used to be a frequent question like "Why my newly created product not showing up in the Storefront?". 

In order to improve the search index diagnostics and management, the new search index API and UI were created in "Search API module" v1.1.0.

## Catalog category or product index management
Now you can check index status for each individual product (or category) right in the details blade:

![Index status widget in Product details UI](https://cloud.githubusercontent.com/assets/5801549/20005050/805a8806-a298-11e6-94eb-d41b610c4edd.png)

A reddish background indicates that the current search index is out of sync. Click the widget to see index details and access the "Build Index" command:

![Index details view](https://cloud.githubusercontent.com/assets/5801549/20005189/6946c980-a299-11e6-824e-2bada9dded13.png)

Click "Build Index" to force the index update:

![Index building progress view](https://cloud.githubusercontent.com/assets/5801549/20005795/daea75fc-a29c-11e6-8c68-236bda8e9698.png)

Usually it takes a few seconds to get the product or category index updated.

## Full index rebuild
The "Build Index" command at catalogs list toolbar has been updated. Now the displayed dialog describes the available options and enables to choose between index update and rebuild:

!["Build Search Index" dialog](https://cloud.githubusercontent.com/assets/5801549/20006287/8a5ec73e-a29f-11e6-8500-cd146b8c9586.png)


## Search API updates
Index maintenance methods added to common search API:

* `GET api/search/index/{documentType}/{documentId}` - Get search index for specified document type and document id;
* `POST api/search/index/{documentType?}`  - Index specified document or all documents of specified type;
* `POST api/search/reindex/{documentType?}` - Re-index specified document or all documents of specified type.