<?php

namespace Skynettechnologies\SilverstripeAllinoneaccessibility;

use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\Tab;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\FieldGroup;
use SilverStripe\Forms\SelectionGroup;
use SilverStripe\Forms\SelectionGroup_Item;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\HiddenField;
use SilverStripe\ORM\DataExtension;
use SilverStripe\ORM\FieldType\DBField;
use SilverStripe\View\HTML;
use SilverStripe\ORM\ArrayList;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\View\Requirements;
use SilverStripe\Core\Manifest\ModuleLoader;

class SilverstripeAllinoneaccessibilitySiteConfig extends DataExtension
{
    private static $db = array(
        'AioaWidgetLicenseKey' => 'Varchar',
        'AioaWidgetColor' => 'Varchar',
        'AioaWidgetPosition' => "Enum('bottom_right,bottom_left,bottom_center,top_left, top_center,top_right,middel_left,middel_right', 'bottom_right')",
        'AioaWidgetIconType' => "Enum('aioa-icon-type-1,aioa-icon-type-2,aioa-icon-type-3', 'aioa-icon-type-1')",
        'AioaWidgetIconSize' => 'Varchar',
        'AioaKeyValid' => 'Boolean',
        'AllinoneaccessibilityIsActive' => 'Boolean',
    );

    /**
     * Exclude fields from translating via Fluent config.
     */
    private static $field_exclude = [
        'AioaWidgetPosition',
        'AioaWidgetIconType',
        'AioaWidgetIconSize',
        'AllinoneaccessibilityIsActive'
    ];

    public function updateCMSFields(FieldList $fields)
    {

        $position_items = [
            new SelectionGroup_Item(
                'bottom_right',
                    new LiteralField('bottom_right', ''),
                'Bottom Right'
            ),
            new SelectionGroup_Item(
                'bottom_left',
                    new LiteralField('bottom_left', ''),
                'Bottom Left'
            ),
            new SelectionGroup_Item(
                'bottom_center',
                    new LiteralField('bottom_center', ''),
                'Bottom Center'
            ),
            new SelectionGroup_Item(
                'top_left',
                    new LiteralField('top_left', ''),
                'Top Left'
            ),
            new SelectionGroup_Item(
                'top_center',
                    new LiteralField('top_center', ''),
                'Top Center'
            ),
            new SelectionGroup_Item(
                'top_right',
                    new LiteralField('top_right', ''),
                'Top Right'
            ),
            new SelectionGroup_Item(
                'middel_left',
                    new LiteralField('middel_left', ''),
                'Middel Left'
            ),
            new SelectionGroup_Item(
                'middel_right',
                    new LiteralField('middel_right', ''),
                'Middel Right'
            ),
        ];

        $icon_type_items = [
            new SelectionGroup_Item(
                'aioa-icon-type-1',
                new LiteralField('aioa-icon-type-1', ''),
                'Accessibility'
            ),
            new SelectionGroup_Item(
                'aioa-icon-type-2',new LiteralField('aioa-icon-type-2', ''),'Wheelchair'
            ),
            new SelectionGroup_Item(
                'aioa-icon-type-3',new LiteralField('aioa-icon-type-3', ''),'Low Vision'
            )
        ];
        $icon_size_items = [
            new SelectionGroup_Item(
                'aioa-big-icon',
                    new LiteralField('aioa-big-icon', ''),
                'Big Icon'
            ),
            new SelectionGroup_Item(
                'aioa-medium-icon',
                    new LiteralField('aioa-medium-icon', ''),
                'Medium Icon'
            ),
            new SelectionGroup_Item(
                'aioa-default-icon',
                    new LiteralField('aioa-default-icon', ''),
                'Default Icon'
            ),
            new SelectionGroup_Item(
                'aioa-small-icon',
                    new LiteralField('aioa-small-icon', ''),
                'Small icon'
            ),
            new SelectionGroup_Item(
                'aioa-extra-small-icon',
                    new LiteralField('aioa-extra-small-icon', ''),
                'Extra Small icon'
            )
        ];

        $fields->addFieldsToTab(
            'Root.AllInOneAccessibility', [
                CheckboxField::create('AllinoneaccessibilityIsActive')
                    ->setTitle(_t(__CLASS__.'IsActive', 'All in One Accessibility Is Active?')),
                TextField::create('AioaWidgetLicenseKey')
                    ->setTitle(_t(__CLASS__.'Buttontitle', 'License Key')),
                TextField::create('AioaWidgetColor')
                    ->setTitle(_t(__CLASS__.'Color', 'Color')),
                HiddenField::create('AioaKeyValid')->addExtraClass("is_valid_key"),
                SelectionGroup::create('AioaWidgetPosition',$position_items)->setTitle(_t(__CLASS__.'Position', 'Icon Position')),
                SelectionGroup::create('AioaWidgetIconType',$icon_type_items)->setTitle(_t(__CLASS__.'IconType', 'Icon Type'))->addExtraClass('icontype-class'),
                SelectionGroup::create('AioaWidgetIconSize',$icon_size_items)->setTitle(_t(__CLASS__.'IconSize', 'Icon Size'))->addExtraClass('iconsize-class')
            ]

        );

        Requirements::javascript('skynettechnologies/silverstripe-allinoneaccessibility:client/dist/javascript/jquery.aioa.js');
        Requirements::css('skynettechnologies/silverstripe-allinoneaccessibility:client/dist/css/jquery.aioa.css');

    }
}
