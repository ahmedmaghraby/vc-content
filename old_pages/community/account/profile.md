---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: account/profile
authorize: true
---
<div ng-controller="accountController" class="vc-contributor">
    <div class="bg-banner">
        <div class="banner-t">Profile</div>
    </div>
    <form ng-init="initialize()" class="responsive">
        <div class="columns">
            <div class="column">
                <div class="control-group">
                    <label>Name</label>
                    <input ng-model="user.firstName" type="text" class="form-input">
                </div>
                <div class="control-group">
                    <label>Organization</label>
                    <input ng-model="newAddresses.organization" type="text" class="form-input">
                </div>
                <div class="control-group right">
                    <a ng-click="updateAccount(user,newAddresses);" class="button fill">Save</a>
                    <a href="/vc-community" class="button fill">Cancel</a>
                </div>
            </div>
        </div>
    </form>
</div>
