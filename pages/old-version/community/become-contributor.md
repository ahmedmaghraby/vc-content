---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: vc-community/become-contributor
---
<div ng-controller="contributorController" class="vc-contributor">
    <div class="bg-banner">
        <div ng-if="!formCompleted" class="banner-t">Become a contributor</div>
         <div ng-if="formCompleted" class="banner-t">Thank you for registration! Now you have become our partner </div>
    </div>
    <form ng-if="!formCompleted" class="responsive">
        <div ng-init="step = 'licenseTerms'" class="steps">
            <div  ng-click="step = 'licenseTerms';reloadContributorData();" class="step">
                <a class="step-link" ng-class="{'selected': (step === 'licenseTerms')}"></a>
                <div class="step-name">License terms</div>
            </div>
            <div  ng-click="step = 'contactInfo';reloadContributorData()" class="step">
                <a class="step-link" ng-class="{'selected': (step === 'contactInfo')}"></a>
                <div class="step-name">Contact information</div>
            </div>
            <div  ng-click="step = 'projectInfo';reloadContributorData()" class="step">
                <a class="step-link" ng-class="{'selected': (step === 'projectInfo')}"></a>
                <div class="step-name">Project info</div>
            </div>
        </div>
        <div ng-show="!formCompleted || loaded" class="columns">
            <div class="column">
                <div class="control-group">
                    <label>First Name (required)</label>
                    <input ng-model="contributor.firstName" type="text" class="form-input" required>
                </div>
                <div class="control-group">
                    <label>Last Name (required)</label>
                    <input ng-model="contributor.lastName" type="text" class="form-input" required>
                </div>
                <div ng-if="step === 'projectInfo'">
                    <div class="control-group">
                        <label>E-mail (required)</label>
                        <input ng-model="contributor.email" type="text" class="form-input" required>
                    </div>
                    <div class="control-group">
                        <label>GitHub Handle (required)</label>
                        <input ng-model="contributor.githubHandle" type="text" class="form-input" required>
                    </div>
                    <div class="control-group">
                        <label>Company Name(required)</label>
                        <input ng-model="contributor.companyName" type="text" class="form-input" required>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="control-group">
                    <label>Street Address (required)</label>
                    <input ng-model="contributor.address" type="text" class="form-input" required>
                </div>
                <div class="control-group">
                    <label>Street Address 2</label>
                    <input ng-model="contributor.address2" type="text" class="form-input">
                </div>
                <div ng-if="step === 'projectInfo'">
                    <div class="control-group">
                        <label>City, State/Region (required)</label>
                        <input ng-model="contributor.city" type="text" class="form-input" required>
                    </div>
                    <div class="control-group">
                        <label>Country, Zip/Postal Code (required)</label>
                        <input ng-model="contributor.country" type="text" class="form-input" required>
                    </div>
                    <div class="control-group">
                        <label>Phone (required)</label>
                        <input ng-model="contributor.phone" type="text" class="form-input" required>
                    </div>
                </div>
                <div class="control-group right">
                    <a ng-click="updateContributorInfo(contributor);" class="button fill">Next</a>
                </div>
            </div>
        </div>
    </form>
</div>
