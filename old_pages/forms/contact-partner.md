---
title: Contact our Partners | Virto Commerce Platform
description: Enterprise .NET open-source ecommerce cloud platform. Contact our Partners
date: 2014-01-30
permalink: contact-partner
---
<div class="roadmap responsive">
	<h1 class="head-title">Contact Partner</h1>
	<p class="text">Use this form to contact partner directly.</p>
	<div class="columns">
		<div class="column">
			<div class="block">
                <form method="post" name="contact_partner">
                    <input type="hidden" name="Contact[Subject]" value="Contact Partner" />
                    <input type="hidden" name="Contact[RedirectUrl]" value='~/thank-you-contact-partner' />
                    <input style="display: none" name="Contact[PartnerId]" value="" />
                    <div class="control-group">
                        <label for="Contact[FirstName]">First name:</label>
                        <input id="Contact[FirstName]" type="text" name="Contact[FirstName]" class="form-input" required="required" />
                    </div>
                    <div class="control-group">
                        <label for="Contact[LastName]">Last name:</label>
                        <input id="Contact[LastName]" type="text" name="Contact[LastName]" class="form-input" required="required" />
                    </div>
                    <div class="control-group">
                        <label for="Email">Email:</label>
                        <input id="Contact[Email]" type="text" name="Contact[Email]" class="form-input" required="required" />
                    </div>
                    <div class="control-group">
                        <label for="CompanyName">Company name:</label>
                        <input id="Contact[CompanyName]" type="text" name="Contact[CompanyName]" class="form-input" required="required" />
                    </div>
                    <div class="control-group">
                        <label for="Kickoff">When do you want to kick off this project?</label>
                        <select id="Contact[Kickoff]" type="text" name="Contact[Kickoff]" class="form-input" required="required">
                            <option value="" selected>Select Option</option>
                            <option value="immediately">Immediately</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="6-12 months">6-12 months</option>
                            <option value="no timeframe">No timeframe</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label for="Message">Comments</label>
                        <textarea id="Contact[Message]" rows="10" cols="30" name="Contact[Message]" class="form-text" required="required"></textarea>
                    </div>
                    <div class="control-group">
                        <button type="submit" class="button fill">Submit request</button>
                    </div>
                    <div class="control-group">
                        <label class="text-14">By clicking «Submit Request» I agree to the Virto Commerce <a href="/terms">Terms</a> and <a href="/privacy">Privacy</a>.</label>
                    </div>
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
{% include 'technologies' %}