<?php

namespace Skynettechnologies\SilverstripeAllinoneaccessibility;

use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Extension;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Requirements;

class SilverstripeAllinoneaccessibility extends Extension
{
    private static $include_allinoneaccessibility_policy_notification = true;
    private static $current_site_config = null;
    private static $load_jquery = false;
    private static $load_jquery_defer = false;
    private static $load_script_defer = true;

    public function onBeforeInit()
    {
        $siteConfig = SiteConfig::current_site_config();
        self::set_current_site_config($siteConfig);
        self::set_allinoneaccessibility_policy_notification_enabled(self::$current_site_config->AllinoneaccessibilityIsActive);
    }

    public function onAfterInit()
    {
        $siteConfig = SiteConfig::current_site_config();
        
        if (self::allinoneaccessibility_policy_notification_enabled()) {
            if (Config::inst()->get(static::class, 'load_jquery')) {
                Requirements::javascript('silverstripe/admin:thirdparty/jquery/jquery.js');
            }
            if (Config::inst()->get(static::class, 'load_jquery_defer')) {
                Requirements::javascript('silverstripe/admin:thirdparty/jquery/jquery.js', ['defer' => true]);
            }
            
            if (Config::inst()->get(static::class, 'load_script_defer')) {
                Requirements::javascript('https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode='.$siteConfig->AioaWidgetColor.'&token='.$siteConfig->AioaWidgetLicenseKey.'&position='.$siteConfig->AioaWidgetPosition.'.'.$siteConfig->AioaWidgetIconType.'.'.$siteConfig->AioaWidgetIconSize.'', ['defer' => true]);
            } else {
                Requirements::javascript('https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode='.$siteConfig->AioaWidgetColor.'&token='.$siteConfig->AioaWidgetLicenseKey.'&position='.$siteConfig->AioaWidgetPosition.'.'.$siteConfig->AioaWidgetIconType.'.'.$siteConfig->AioaWidgetIconSize.'');
            }
        }
    }

    public static function set_current_site_config($input)
    {
        self::$current_site_config = $input;
    }

    public static function set_allinoneaccessibility_policy_notification_enabled($bool)
    {
        self::$include_allinoneaccessibility_policy_notification = (bool) $bool;
    }
    public static function allinoneaccessibility_policy_notification_enabled()
    {
        return self::$include_allinoneaccessibility_policy_notification;
    }
}
