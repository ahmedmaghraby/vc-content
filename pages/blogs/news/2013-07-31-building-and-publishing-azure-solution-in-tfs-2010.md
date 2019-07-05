---
author: VirtoCommerce
category: technical
date: 2013-07-31 22:37
excerpt: In our solution we have several worker roles and web roles as part of the solution.
permalink: blog/building-and-publishing-azure-solution-in-tfs-2010
tags: [azure-programming, programming, azure, build, cloud, tfs]
title: "Building and publishing azure solution in TFS 2010"
---
The process of creating <a href="http://en.wikipedia.org/wiki/Continuous_integration" rel="nofollow">continuous integration</a> process in azure is well described here <a href="http://www.windowsazure.com/en-us/develop/net/common-tasks/continuous-delivery/" rel="nofollow">http://www.windowsazure.com/en-us/develop/net/common-tasks/continuous-delivery/</a>.

Unfortunately there are several issues you might encounter that are not covered in the above document.

One of them is related to the error message below:

<span class="code-block">
`C:\Program Files (x86)\MSBuild\Microsoft\VisualStudio\v11.0\Windows Azure Tools\2.0\Microsoft.WindowsAzure.targets (632): The role '*WorkerRole' was not found in the service definition. Parameter name: roleName`
</span>

The simple solution is to add `/m:1` argument to the "MSBuild Arguments" for the Build definition. So your full MSBuild Arguments field will look something like this:

<span class="code-block">
`/t:Publish  /p:TargetProfile=Cloud /Property:PublishDir="//testserver/Deployment/BuildTemp/" /m:1`
</span>

## Explanation of why it works

In our solution we have several worker roles and web roles as part of the solution. With Azure SDK 2.0 and <a href="http://en.wikipedia.org/wiki/Team_Foundation_Server" rel="nofollow">TFS</a>. Build all files including ServiceDefinition.csdef are copied to the single output directory. By default TFS Build includes `/m` flag which uses multiple threads (= number of cores) to build a solution. They can result in projects built in slightly different order and overwriting of the ServiceDefinition file, setting it to use a single thread resolve this issue.

Hope this helps somebody, as I spent a day trying to troubleshoot this.