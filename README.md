# SilverStripe All in One Accessibility Module

## Overview

All in One Accessibility widget improves Silverstripe website ADA compliance and browser experience for ADA, WCAG 2.1 & 2.2, Section 508, California Unruh Act, Australian DDA, European EAA EN 301 549, UK Equality Act (EA), Israeli Standard 5568, Ontario AODA, Canada ACA, German BITV, France RGAA, Brazilian Inclusion Law (LBI 13.146/2015), Spain UNE 139803:2012, JIS X 8341 (Japan), Italian Stanca Act and Switzerland DDA Standards. 

Screen Reader, Voice Navigation, Dictionary, Virtual Keyboard, Accessibility Profiles, Sign language Libras (Brazilian Portuguese) Custom Widget Color, Icon size, Position, GA4 Tracking and custom accessibility statement link are the top features. 

AI Widget Supports 140 Languages and Voice Over. It is flexible & lightweight widget that can be changed according to law and reduces the risk of time-consuming accessibility lawsuits 

Follows the best industry practices and standards ISO 9001:2015 & ISO 27001:2013 and complies with GDPR, COPPA regulations. Member of W3C and International Association of Accessibility Professionals (IAAP). 

Our AI automatically remediates images Alternative text and uses the accessibility interface which handles UI and design related adjustments. All in One Accessibility add-on enhances your Silverstripe website accessibility to people with hearing or vision impairments, motor impaired, color blind, dyslexia, cognitive & learning impairments, seizure and epileptic, and ADHD problems.  


Following features can be added as an addon  
-    White Label service  
-    Custom Branding  
-    Live Site translates  
-    Customize Accessibility Menu/widget  
-    Accessibility Monitoring  
-    PDF / Word Document Remediation 



## Maintainer Contacts
*  Skynet Technologies USA LLC

## Requirements
* SilverStripe CMS 4
* SilverStripe Framework 4

## Version info
The master branch of this module is currently aiming for SilverStripe 4.x compatibility

## Installation Instructions

* Install via Composer
```
composer require "skynettechnologies/silverstripe-allinoneaccessibility"
```
* Visit yoursite.com/dev/build?flush=1 to rebuild the database.
* Visit yoursite.com/admin/settings/ and on Allinoneaccessibility tab 

## Usage with Fluent
* Install [Fluent](https://github.com/tractorcow/silverstripe-fluent) on your project
* Add to your YML configuration file an FluentExtension and these DB fields:
```yml
SilverStripe\SiteConfig\SiteConfig:
  extensions:
    - 'TractorCow\Fluent\Extension\FluentExtension'
  translate:
    - 'AioaWidgetPosition'
    - 'AioaWidgetIconType'
    - 'AioaWidgetIconSize'
    - 'AioaWidgetColor'
    - 'AioaWidgetLicenseKey'
```
* Visit yoursite.com/dev/build?flush=1 to rebuild the database.

## Thanks
