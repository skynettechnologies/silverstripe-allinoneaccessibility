<?php

namespace Skynettechnologies\SilverstripeAllinoneaccessibility;

use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\Tab;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\FieldGroup;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Core\Extension;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\View\HTML;
use SilverStripe\ORM\ArrayList;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\View\Requirements;
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\Security\Security;
use SilverStripe\Security\Group;

class SilverstripeAllinoneaccessibilitySiteConfig extends Extension
{
  
    public function updateCMSFields(FieldList $fields)
    {
        Requirements::javascript('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        Requirements::javascript('https://code.jquery.com/jquery-3.6.4.min.js');
        Requirements::javascript('_resources/skynettechnologies/silverstripe-allinoneaccessibility/client/dist/javascript/jquery.aioa.js');
Requirements::css('_resources/skynettechnologies/silverstripe-allinoneaccessibility/client/dist/css/jquery.aioa.css');

        Requirements::customScript(
            <<<JS
        (function($) {
           console.log("Custom Js");
        })(jQuery);
        JS
        );
    }
}
