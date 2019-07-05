---
author: VirtoCommerce
category: technical
date: 2015-10-21 04:07
excerpt: We are happy to announce the initial version of VirtoCommerce Azure API App for deployment into the Azure App Service.
permalink: blog/integrating-virtocommerce-with-erp-and-other-systems-using-azure-api-app
tags: [announcements]
title: "Integrating VirtoCommerce with ERP and other systems using Azure API App"
---
We are happy to announce the initial version of VirtoCommerce Azure API App for deployment into the Azure App Service. This API App implements integration points with the VirtoCommerce platform api using Azure Logic Apps. In the initial version catalog, products and order APIs are exposed.

With the help of the API App you can integrate VirtoCommerce with many systems like SAP ERP, Salesforce and many more that are available on Azure Marketplace as connectors.

![](assets/images/blog/connectors.png)

API Connectors and API Apps are a relatively new approach for Microsoft to integrate systems within the Azure ecosystem. It allows you to integrate cloud solutions with on-premises solutions. Systems can automatically exchange data based on the rules defined in the Azure Logic App. You can read more about Logic Apps in these helpful links:

* <a href="https://azure.microsoft.com/en-us/documentation/articles/app-service-logic-what-are-logic-apps/" target="_blank" rel="nofollow">What are Logic Apps</a>
* <a href="https://azure.microsoft.com/en-us/documentation/videos/azure-app-service-logic-apps-with-josh-twist/" target="_blank" rel="nofollow">Azure App Service Logic Apps</a>

![](assets/images/blog/untitled_l.png)

The VirtoCommerce API App exposes VirtoCommerce platform and its modules API as an Azure API App. That means any solution based on VirtoCommerce can exchange data with other systems available on Azure Marketplace.

The API App is available on <a href="https://github.com/VirtoCommerce/vc-azure-api-app" target="_blank" rel="nofollow">github</a> and can be deployed from there using “Deploy to Azure” button. You’ll need an Azure subscription.

![](assets/images/blog/untitled_m.png)

Click "Deploy to Azure" to start VirtoCommerce API App deployment to your account.

Provide the required data during setup. More on deployment process read the Readme section on the github project page.

After the deployment process has successfully completed the VirtoCommerce.API App should appear in the list of API Apps of your Azure subscription. It can be used like any other API App by adding it to your Logic App.

## API provided by the App

* Catalog management API
* Product management API
* Orders management API
* ... more available upon request

## Using the API App

The deployed API App can be used as part of an Azure Logic App.

To start using Azure Logic apps refer to following links:

* <a href="https://azure.microsoft.com/en-us/documentation/articles/app-service-logic-create-a-logic-app/" target="_blank" rel="nofollow">Create a Logic App</a>
* <a href="https://azure.microsoft.com/en-us/documentation/videos/azure-app-service-logic-apps-with-josh-twist/" target="_blank" rel="nofollow">Azure App Service Logic Apps</a>

Logic App can be used as some part of the integration process of the VirtoCommerce platform with the other systems. It can be an ERP system, customer notification, order fulfillment management or whatever system that exposes their api as an Azure API App or available in the Azure marketplace connectors list.

While creating Logic app, there is an API Apps list on the right of Logic App designer in Azure management portal. If the VirtoCommerce API App deployment completed successfully it should appear in the list

![](assets/images/blog/untitled_1.png)

Choose it. The VirtoCommerce.APIApp will be added to the Logic App designer as action.

![](assets/images/blog/untitled_2.png)

Choose the action you need to do with the VirtoCommerce API.

![](assets/images/blog/untitled_3.png)

In the screenshot above the “create order” action selected. It has input parameters required to compose api request, e.g. order data. The order data field values can be entered by hand in the Logic app designer, but commonly it’s passed from another Logic app action. The resulting Logic App could look like on the screenshot below.

![](assets/images/blog/untitled_4.png)

Click OK to save changes. Depending on the trigger the application will execute periodically or under defined conditions and programmed actions will be launched.

That way composing the Logic app VirtoCommerce platform can be integrated with other systems.

## What’s next

It’s only the beginning. More VirtoCommerce Api functionality will be exposed through API App upon request once there is more interest regarding our VirtoCommerce integration using Azure API App.