---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: account/againinvite
---
<div class="roadmap __responsive" style="text-align:center;" ng-controller="accountController">
    <h1 class="head-title">Didn't get your activation email?</h1>
    <p class="text">
        Checked your junk folder? Double-checked which email address you entered? <br />
        Refreshed your inbox? If the activation email is still MIA, resend below.
    </p>
    <div class="columns">
        <div id="recover_password">
            <form name="inviteform" novalidate>
                <div class="control-group block-400 block-center">
                    <input ng-model="customer.email" required ng-pattern="emailPattern" type="text" tabindex="1" class="form-input" name="email" id="email" placeholder="{{ 'customer.recover_password.email' | t }}">
                    <p>
                        <input ng-click="getInvite()" ng-disabled="inviteform.$invalid" type="submit" class="button fill width-full" tabindex="2" value="Resend Activation Email" />
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>