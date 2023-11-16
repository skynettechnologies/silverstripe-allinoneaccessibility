# SilverStripe All in One Accessibility Module

## Overview
All in One Accessibility widget improves Silverstripe website ADA compliance and browser experience for ADA, WCAG 2.1, Section 508, Australian DDA, European EAA EN 301 549, UK Equality Act (EA), Israeli Standard 5568, California Unruh, Ontario AODA, Canada ACA, German BITV, and France RGAA Standards.

It uses the accessibility interface which handles UI and design related adjustments. All in One Accessibility app enhances your Silverstripewebsite accessibility to people with hearing or vision impairments, motor impaired, color blind, dyslexia, cognitive & learning impairments, seizure and epileptic, and ADHD problems. It uses the accessibility interface which handles UI and design related adjustments.


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
