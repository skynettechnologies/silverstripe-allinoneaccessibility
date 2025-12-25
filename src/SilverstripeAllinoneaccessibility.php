<?php

namespace Skynettechnologies\SilverstripeAllinoneaccessibility;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class SilverstripeAllinoneaccessibility extends Extension
{
    public function onAfterInit()
    {
        Requirements::javascript(
            '_resources/skynettechnologies/silverstripe-allinoneaccessibility/client/dist/javascript/widget.js'
        );
    }
}
