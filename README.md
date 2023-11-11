# SilverStripe All in One Accessibility Module

## Overview
Quick Web Accessibility Implementation with All In One Accessibility!*

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
