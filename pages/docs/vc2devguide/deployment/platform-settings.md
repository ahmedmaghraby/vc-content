---
title: Platform settings
description: The developer guide to Virto Commerce platform settings
layout: docs
date: 2016-06-08T12:59:50.447Z
priority: 2
---
**VirtoCommerce.Platform.Web\Web.config** file contains global application settings and connection strings.

## Connection strings

### VirtoCommerce

This is a standard database connection string. It defines SQL server, database, user and password.

### AssetsConnectionString

Assets connection string consists of two parts. First part is **provider=XXXX**, which specifies which provider to use for storing assets. The remainder of the string is passed to provider’s constructor. Platform includes two asset providers: LocalStorage and AzureBlobStorage.

### LocalStorage
```
<add name="AssetsConnectionString" connectionString="provider=LocalStorage;rootPath=~/App_Data/Assets;publicUrl=http://localhost/admin/Assets" />
```

This provider stores assets in a local file system.

**rootPath** is a virtual or physical path to the assets root directory.

**publicUrl** is a public URL for the root directory defined above. It is used to construct full asset URLs.

### AzureBlobStorage
```
<add name="AssetsConnectionString" connectionString="provider=AzureBlobStorage;DefaultEndpointsProtocol=http;AccountName=XXXX;AccountKey=YYYY" />
```

This provider stores assets in <a class="crosslink" href="https://virtocommerce.com/ecommerce-hosting" target="_blank">Azure Storage</a>.

You should copy values for this connection string from your Azure portal and paste it to web.config

## Application settings

### SampleDataUrl
```
<add key="VirtoCommerce:SampleDataUrl" value="http://virtocommerce.blob.core.windows.net/sample-data" />
```

This parameter defines the URL of either a ZIP package, which contains exported sample data, or a directory containing the manifest.json file with the list of available sample data packages and its URLs.

### ModulesDataSources
```
<add key="VirtoCommerce:ModulesDataSources" value="https://raw.githubusercontent.com/VirtoCommerce/vc-modules/master/modules.json; C:\customModules\modules.json" />
```

This parameter defines the available data sources for VC modules management. There can be multiple (remote or local) links specified in a single setting value. Each link should lead to file in **json** format containing modules information such as module id, title, version, dependencies, authors, etc.

### EnableBundlesOptimizations
```
<add key="VirtoCommerce:EnableBundlesOptimizations" value="false" />
```

Gets or sets whether bundling and minification of bundle references is enabled.

### AutoInstallModuleBundles
```
<add key="VirtoCommerce:AutoInstallModuleBundles" value="commerce" />
```

This parameter defines the module bundles that will be installed automatically.

### Authentication settings

The platform includes a number of authentication providers, each of which can be enabled or disabled separately.

### AllowOnlyAlphanumericUserNames
```
<add key="VirtoCommerce:Authentication:AllowOnlyAlphanumericUserNames" value="false" />
```

Indicates to only allow alpha and numeric symbols in users names.

### RequireUniqueEmail
```
<add key="VirtoCommerce:Authentication:RequireUniqueEmail" value="false" />
```

If set, enforces that emails are non empty, valid, and unique.

### Password
```
<add key="VirtoCommerce:Authentication:Password.RequiredLength" value="5" />
<add key="VirtoCommerce:Authentication:Password.RequireNonLetterOrDigit" value="false" />
<add key="VirtoCommerce:Authentication:Password.RequireDigit" value="false" />
<add key="VirtoCommerce:Authentication:Password.RequireLowercase" value="false" />
<add key="VirtoCommerce:Authentication:Password.RequireUppercase" value="false" />
```

These options specify password policy requirements.

### Cookies
```
<add key="VirtoCommerce:Authentication:Cookies.Enabled" value="true" />
<add key="VirtoCommerce:Authentication:Cookies.ValidateInterval" value="1:00:00:00" />
```

If the time passed since the authentication cookie was generated is greater than ValidateInterval the security stamp validator will check if the security stamp has been changed in the database.

Default value is 1 day.

### Cookie
```
<add key="VirtoCommerce:Authentication:Cookie:AuthenticationMode" value="Active" />
```

If Active the authentication middleware alter the request user coming in and alter 401 Unauthorized responses going out. If Passive the authentication middleware will only provide identity and alter responses when explicitly indicated by the AuthenticationType.

```
<add key="VirtoCommerce:Authentication:Cookie:AuthenticationType" value="ApplicationCookie" />
```

The AuthenticationType in the options corresponds to the IIdentity AuthenticationType property. A different value may be assigned in order to use the same authentication middleware type more than once in a pipeline.

```
<add key="VirtoCommerce:Authentication:Cookie:Domain" value="" />
```

Determines the domain used to create the cookie. Is not provided by default.

```
<add key="VirtoCommerce:Authentication:Cookie:HttpOnly" value="true" />
```

Determines if the browser should allow the cookie to be accessed by client-side javascript. The default is true, which means the cookie will only be passed to http requests and is not made available to script on the page.

```
<add key="VirtoCommerce:Authentication:Cookie:Name" value=".AspNet.ApplicationCookie" />
```

Determines the cookie name used to persist the identity. The default value is ".AspNet.Cookies". This value should be changed if you change the name of the AuthenticationType, especially if your system uses the cookie authentication middleware multiple times.

```
<add key="VirtoCommerce:Authentication:Cookie:Path" value="/" />
```

Determines the path used to create the cookie. The default value is "/" for highest browser compatability.

```
<add key="VirtoCommerce:Authentication:Cookie:Secure" value="SameAsRequest" />
```

Determines if the cookie should only be transmitted on HTTPS request. The default is to limit the cookie to HTTPS requests if the page which is doing the SignIn is also HTTPS. If you have an HTTPS sign in page and portions of your site are HTTP you may need to change this value.

```
<add key="VirtoCommerce:Authentication:Cookie:ExpireTimeSpan" value="14:00:00:00" />
```

Controls how much time the cookie will remain valid from the point it is created. The expiration information is in the protected cookie ticket. Because of that an expired cookie will be ignored even if it is passed to the server after the browser should have purged it.

```
<add key="VirtoCommerce:Authentication:Cookie:LoginPath" value="" />
```

The LoginPath property informs the middleware that it should change an outgoing 401 Unauthorized status code into a 302 redirection onto the given login path. The current url which generated the 401 is added to the LoginPath as a query string parameter named by the ReturnUrlParameter.
Once a request to the LoginPath grants a new SignIn identity, the ReturnUrlParameter value is used to redirect the browser back to the url which caused the original unauthorized status code.
If the LoginPath is null or empty, the middleware will not look for 401 Unauthorized status codes, and it will not redirect automatically when a login occurs.

```
<add key="VirtoCommerce:Authentication:Cookie:LogoutPath" value="" />
```

If the LogoutPath is provided the middleware then a request to that path will redirect based on the ReturnUrlParameter.

```
<add key="VirtoCommerce:Authentication:Cookie:ReturnUrlParameter" value="ReturnUrl" />
```

The ReturnUrlParameter determines the name of the query string parameter which is appended by the middleware when a 401 Unauthorized status code is changed to a 302 redirect onto the login path.
This is also the query string parameter looked for when a request arrives on the login path or logout path, in order to return to the original url after the action is performed.

```
<add key="VirtoCommerce:Authentication:Cookie:SlidingExpiration" value="true" />
```

The SlidingExpiration is set to true to instruct the middleware to re-issue a new cookie with a new expiration time any time it processes a request which is more than halfway through the expiration window.

### Bearer Tokens
```
<add key="VirtoCommerce:Authentication:BearerTokens.Enabled" value="true" />
<add key="VirtoCommerce:Authentication:BearerTokens.AccessTokenExpireTimeSpan" value="1:00:00" />
```

AccessTokenExpireTimeSpan is the life time of the access token. When this period has expired the client should request a new token.

Default value is 1 hour.

```
<add key="VirtoCommerce:Authentication:BearerTokens.RefreshTokenExpireTimeSpan" value="30:00:00:00" />
```

RefreshTokenExpireTimeSpan is the life time of the refresh token.

```
<add key="VirtoCommerce:Authentication:BearerTokens.LimitedCookiePermissions" value="security:call_api;platform:asset:read;platform:export;background_jobs:manage;content:read;platform:asset:create" />
```
The list of permissions for Bearer token authorization that will be used to authorize some non-AJAX requests when it is impossible to add Bearer Authorization header.

### HMAC
```
<add key="VirtoCommerce:Authentication:Hmac.Enabled" value="true" />
<add key="VirtoCommerce:Authentication:Hmac.SignatureValidityPeriod" value="00:20:00" />
```
If the time passed since the request signature was generated is greater than SignatureValidityPeriod the request will be rejected by server.

Default value is 20 minutes.

### API Keys
```
<add key="VirtoCommerce:Authentication:ApiKeys.Enabled" value="true" />
<add key="VirtoCommerce:Authentication:ApiKeys.HttpHeaderName" value="api_key" />
<add key="VirtoCommerce:Authentication:ApiKeys.QueryStringParameterName" value="api_key" />
```
The API key can be passed in the Authorization header, in the custom header (HttpHeaderName) or in the URL (QueryStringParameterName).

Default value for both parameters is api_key.

### Azure Active Directory
```
<add key="VirtoCommerce:Authentication:AzureAD.Enabled" value="false" />
```

Determines whether the user authentication via Azure Active Directory is enabled.

```
<add key="VirtoCommerce:Authentication:AzureAD.AuthenticationType" value="AzureAD"/>
```

Sets AuthenticationType value for Azure AD authentication provider.

```
<add key="VirtoCommerce:Authentication:AzureAD.Caption" value="Azure Active Directory"/>
```

Sets human-readable caption for Azure AD authentication provider. It is visible on sign-in page.

```
<add key="VirtoCommerce:Authentication:AzureAD.ApplicationId" value="(Replace this with your Azure AD application ID, e.g. 01234567-89ab-cdef-0123-456789abcdef)" />
```

Application ID of the VirtoCommerce platform application registered in Azure Active Directory. It can be found in the Azure control panel: Azure Active Directory > App registrations > (platform app) > Application ID (e.g. 01234567-89ab-cdef-0123-456789abcdef).

```
<add key="VirtoCommerce:Authentication:AzureAD.TenantId" value="(Replace this with your Azure AD domain ID, e.g. abcdef01-2345-6789-abcd-ef0123456789)" />
```

ID of the Azure AD domain that will be used for authentication. It can be found in the Azure control panel: Azure Active Directory > Properties > Directory ID (e.g. abcdef01-2345-6789-abcd-ef0123456789).

```
<add key="VirtoCommerce:Authentication:AzureAD.Instance" value="https://login.microsoftonline.com/" />
```

URL of the Azure AD endpoint used for authentication (usually https://login.microsoftonline.com/).

```
<add key="VirtoCommerce:Authentication:AzureAD.DefaultUserType" value="Manager" />
```

Default user type for users created by Azure AD accounts.

### Jobs
```
<add key="VirtoCommerce:Jobs.Enabled" value="true" />
```

Enables Hangfire worker service. Assigned to HangfireOptions.StartServer.

```
<add key="VirtoCommerce:Jobs.StorageType" value="SqlServer" />
```

Selects Hangfire storage type. Assigned to HangfireOptions.JobStorageType.

```
<add key="VirtoCommerce:Jobs.WorkerCount" value="null" />
```

Configures number of Hangfire workers. Assigned to HangfireOptions.WorkerCount.

# Notifications
```
<add key="VirtoCommerce:Notifications:Gateway" value="Default" />
```

Specifies notification sending gateway. Could be "Default" or "SendGrid".

# Security
```
<add key="VirtoCommerce:Security:SuppressForcingCredentialsChange" value="false" />
```

Tells if need to suppress default credentials change popup.