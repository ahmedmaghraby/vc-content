---
title: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
description: Virto commerce - Enterprise .NET open-source ecommerce cloud platform. About Us
date: 2014-01-30
permalink: registration
---
<div ng-controller="accountController" class="roadmap responsive">
	<h1 style="margin-left: 18px;" class="head-title">Create account</h1>
	<div class="columns">
		<div style="bottom: 20px;position: relative;" class="column">
			<div class="block">
				<form name="loginForm" method="post">
					<input type="hidden" name="Contact[Subject]" value="Contact Partner" />
					<input type="hidden" name="Contact[RedirectUrl]" value='~/thank-you-contact-partner' />
					<input style="display: none" name="Contact[PartnerId]" value="" />
					<div class="control-group">
						  <label for="first_name" class="hidden-label">First Name</label>
                          <input ng-model="user.name" class="form-input" style="width:300px;" type="text" value="" name="customer[first_name]" id="first_name" placeholder="First Name" autocapitalize="words" autofocus />
					</div>			
					<div class="control-group">
						 <label for="last_name" class="hidden-label">Last Name</label>
                         <input ng-model="user.lastName" class="form-input" style="width:300px;" type="text" value="" name="customer[last_name]" id="last_name" placeholder="Last Name" autocapitalize="words" />
					</div>
                    <div class="control-group">
                         <label for="email" class="hidden-label">Email</label>
                         <input ng-model="user.email" class="form-input" style="width:300px;" type="email" value="" name="customer[email]" id="email" placeholder="Email" autocorrect="off" autocapitalize="off" ng-required="user.email" />
                    </div>
                    <div class="control-group">
                        <label for="user_name" class="hidden-label">User Name</label>
                        <input ng-model="user.user_name" class="form-input" style="width:300px;" type="text" value="" name="customer[user_name]" id="user_name" placeholder="User Name" autocorrect="off" autocapitalize="off" ng-required="user.user_name" />
                    </div>
                    <div class="control-group">
                        <label for="password" class="hidden-label">Password</label>
                        <input ng-model="user.password" class="form-input" style="width:300px;" type="password" value="" name="customer[password]" id="create_password" placeholder="Password" ng-required="user.password" />
                    </div>
                    <p>
                        <div style="top: 25px; position: relative;" class="control-group">
					        <button ng-click="createAccount(user);" type="submit" class="button fill" ng-required="registrationForm.$valid==true">Create an account</button>
					    </div>
                    </p>
				</form>
			</div>
		</div>
		<div class="column">
			<div class="block">
				<h3>Frequently asked questions</h3>
				<ul class="list">
					<li>
						<span class="title">When will I get reply from a partner?</span>
						<span class="descr">You should get reply from a partner within a business day. Please be aware of partner timezone. If 
						you don't get any reply within a day, please email us at sales@virtocommerce.com and will make sure you get questions answered.</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>