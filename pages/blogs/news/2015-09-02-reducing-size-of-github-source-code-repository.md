---
author: VirtoCommerce
category: technical
date: 2015-09-02 14:21
excerpt: Quick tip on how to reduce size of a bloated Github repository. 
permalink: blog/reducing-size-of-github-source-code-repository
tags: [announcements, open-source, codeproject, github]
title: "Reducing size of Github source code repository"
---
## Introduction

Quick tip on how to reduce size of a bloated Github repository.

## Background

We have been developing Virto Commerce on Github for the past two years. There have been quite a few feature branches and many files have been added/removed during the development. All these files still sit in the Git history which is downloaded every time when the repository is cloned. At its peak, the repository reached a size of over 200mb, while useful/active code was only a few MBs in size. At that point the size started to impact efficiency of developers working on the platform. We researched several options on how to reduce size. The main concern was keeping a history of still active files while also allowing our existing customers to be able to see and merge changes to their older versions.

## Solution

We ended up using the tool from <a href="https://rtyley.github.io/bfg-repo-cleaner/" rel="nofollow" target="_blank">https://rtyley.github.io/bfg-repo-cleaner/</a>.  It allows for the quick removal of large files from the Git history while preserving the latest HEAD files. That means we didn't have to worry about deleting something that was still used. We wanted to delete as many binary files and DLLs as possible. Most of all libraries were moved to nuget packages and only the ones that didn't have the latest nuget repositories remain. One of the requirements was to keep files and history related to 1.x version which at the moment was in the 1.x branch. We had to remove it to reduce the size of the repository since it contains a lot of files that are no longer used in the current 2.x. To solve the issue we decided to move the whole branch to a new repository, that way a complete history for 1.x could be preserved (including large files). To move the repository we used the following command:

<span class="code-block">
`git push https://github.com/VirtoCommerce/vc-community-1.x.git v1.x:master`
</span>

The command will push the branch into the vc-community-1.x Github repository and rename to the "master".

The rest of the commands are related to deleting large files from the existing repository:

<span class="code-block">
`git clone --mirror https://github.com/VirtoCommerce/vc-community.git .git
java -jar bfg.jar --delete-folders '{.nuget,Architecture,Projects,SDK,Shared,Tests,Tools,packages,src}' --protect-blobs-from master,dev .git
java -jar bfg.jar --delete-files '*.{dll,exe,lib,pfx,nupkg,zip,eot,otf,ttf,woff,bmp,gif,ico,jpg,jpeg,png,sql}' --protect-blobs-from master,dev .git
java -jar bfg.jar --strip-blobs-bigger-than 100K --protect-blobs-from master,dev .git
cd .git
git reflog expire --expire=now --all; git gc --prune=now --aggressive
git push`
</span>

The above script will clone the clean repository to a local folder without any of the content files, remove large files and then push all the changes back to the repository.
<span class="code-block">
`Counting objects: 47842, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (12659/12659), done.
Writing objects: 100% (47842/47842), 13.03 MiB | 377.00 KiB/s, done.
Total 47842 (delta 34134), reused 47842 (delta 34134)
To https://github.com/VirtoCommerce/vc-community.git
+ cda685f...b8cf9ab dev -&gt; dev (forced update)
+ f763931...5e12fb4 master -&gt; master (forced update)
+ 80c1ae1...af480a0 community/dev -&gt; community/dev (forced update)
+ 96c221b...b96e4b5 v1.10 -&gt; v1.10 (forced update)
+ b835d58...0c9a746 v1.11 -&gt; v1.11 (forced update)
+ 19f286e...f3c251a v1.12 -&gt; v1.12 (forced update)
+ 192d38a...c646866 v1.13 -&gt; v1.13 (forced update)
+ 30b0f11...368e912 v1.9 -&gt; v1.9 (forced update)
+ 48aae27...a79c544 v1.9.732 -&gt; v1.9.732 (forced update)
+ bec5eaa...211d6d6 v2.1 -&gt; v2.1 (forced update)
+ 3da7501...c6f6cb2 v2.2 -&gt; v2.2 (forced update)
+ 54ce0ac...75fc554 v2.3 -&gt; v2.3 (forced update)
+ 788b7fd...0d53a8d v2.4 -&gt; v2.4 (forced update)
! [remote rejected] refs/pull/1/head -&gt; refs/pull/1/head (deny updating a hidden ref)
! [remote rejected] refs/pull/1/merge -&gt; refs/pull/1/merge (deny updating a hidden ref)
! [remote rejected] refs/pull/2/head -&gt; refs/pull/2/head (deny updating a hidden ref)
! [remote rejected] refs/pull/3/head -&gt; refs/pull/3/head (deny updating a hidden ref)
! [remote rejected] refs/pull/37/head -&gt; refs/pull/37/head (deny updating a hidden ref)
! [remote rejected] refs/pull/37/merge -&gt; refs/pull/37/merge (deny updating a hidden ref)
! [remote rejected] refs/pull/4/head -&gt; refs/pull/4/head (deny updating a hidden ref)
! [remote rejected] refs/pull/4/merge -&gt; refs/pull/4/merge (deny updating a hidden ref)
error: failed to push some refs to https://github.com/VirtoCommerce/vc-community.git
</span>

So it failed to rewrite some hidden references and the size of the repository on GitHub is 94 MB, but if you make a common clone, it shrinks to 14 MB.

## Conclusion

The process was fairly straightforward using tools provided by the Git community. One more tool I'd like to mention is Git Extensions - <a href="http://gitextensions.github.io/" rel="nofollow" target="_blank">http://gitextensions.github.io/</a>. It includes a large file plugin which will display all the large files in the repository by simply opening it. This is a very useful feature to figure out why your repository is bloated.
