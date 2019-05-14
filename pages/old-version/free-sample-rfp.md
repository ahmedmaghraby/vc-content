---
title: Virto commerce - ASP.NET open-source ecommerce framework. Free sample RFP
description: Virto commerce - ASP.NET open-source ecommerce framework. Free sample RFP
date: 2019-01-28
permalink: free-sample-RFP
tags : 
- rfp
---
<div class="roadmap __responsive">
	<h1 class="section-t">Get started on B2B Ecommerce with our RFP Template</h1>
    <div class="text">
        Many companies require a Request For Proposal (RFP) process to select ecommerce software, and that effort can be challenge and resource-intensive.<br />
        To help you get started, we collected the most important business requirements and technical features that a company should ask when researching B2B ecommerce vendors.
    </div>
    <div class="text">
        Who should use this RFP Template?<br />
        Whether you’re launching a new ecommerce project or replatforming an existing site, this RFP Template serves as a robust resource to help you compare capabilities of several
        B2B ecommerce vendors.
    </div>
    <div class="text">
        This B2B Ecommerce Template is a great resource for:
    </div>
    <ul class="text" style="margin-left:50px">
        <li>Ecommerce Managers / Digital Commerce Leaders</li>
        <li>IT Managers and Chief Information Officers</li>
        <li>Application Developers</li>
        <li>Agencies and Consultants</li>
        <li>Chief Marketing Officers, Directors of Marketing</li>
        <li>Business Analysts</li>
    </ul>
    <div class="text">
        Is there another way to compare Ecommerce vendors?<br />
        Yes, there is! You can get there faster with a Proof of Concept (POC). In this Virto RFP Template, you’ll see
        a best-practice recommendation for your evaluation: ask two or three ecommerce vendors to build a Proof of Concept for you. They should be able to do this in two weeks and
        show you the software in action, as it relates to a challenge in your business.<br />
        The best news? Virto Commerce will create a POC for free. <a href="mailto:garren@virtoway.com">Ask us how.</a>
    </div>
    <div class="columns">
        <div class="column">
            <div class="block">
                <form action="" method="post" accept-charset="UTF-8" id="rfp">
                    <input id="Contact[Subject]" type="hidden" name="Contact[Subject]" value="Contact Us" />
                    <input id="Contact[RedirectUrl]" type="hidden" name="Contact[RedirectUrl]" value="~/thank-you" />
                    <div class="column">
                        <div class="control-group">
                            <label for="Contact[FirstName]">First name (required)</label>
                            <input id="Contact[FirstName]" tabindex="1" type="text" name="Contact[FirstName]" class="form-input" required="required" autocomplete="given-name" />
                        </div>
                        <div class="control-group">
                            <label for="Contact[Email]">Email (required)</label>
                            <input id="Contact[Email]" tabindex="3" type="text" name="Contact[Email]" class="form-input" required="required" autocomplete="email" />
                        </div>
                        <div class="control-group">
                            <label for="CompanyName">Company name</label>
                            <input id="Contact[CompanyName]" tabindex="5" type="text" name="Contact[CompanyName]" class="form-input" autocomplete="organization" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="control-group">
                            <label for="LastName">Last name (required)</label>
                            <input id="Contact[LastName]" tabindex="2" type="text" name="Contact[LastName]" class="form-input" required="required" autocomplete="family-name" />
                        </div>
                        <div class="control-group">
                            <label for="Phone">Phone</label>
                            <input id="Contact[Phone]" type="tel" tabindex="4" name="Contact[Phone]" class="form-input" autocomplete="mobile" />
                        </div>
                        <div class="control-group">
                            <label for="JobTitle">Job Title</label>
                            <input id="Contact[JobTitle]" type="text" tabindex="6" name="Contact[JobTitle]" class="form-input" autocomplete="organization-title" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label for="Message">Tell us about your site, company and traffic (required)</label>
                        <textarea id="Contact[Message]" rows="10" cols="30" name="Contact[Message]" class="form-text" required="required" tabindex="10"></textarea>
                    </div>
                    <div class="control-group">
                        <button type="submit" class="button fill" tabindex="11">Submit Request</button>
                    </div>
                    <div class="control-group">
                        <label class="text-14">By clicking «Submit Request» I agree to the Virto Commerce <a href="/terms">Terms</a> and <a href="/privacy">Privacy</a>.</label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
{% include 'technologies' %}
<script>
    $('#rfp').submit(function() {
		if (this.checkValidity())
			window.location.href = '/thanks-for-download-free-sample-rfp';
	});
</script>