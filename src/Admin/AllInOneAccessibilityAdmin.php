<?php

namespace Skynettechnologies\SilverstripeAllinoneaccessibility\Admin;

use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Forms\Form;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\View\Requirements;

class AllInOneAccessibilityAdmin extends LeftAndMain
{
    private static $menu_title = 'All in One Accessibility';
    private static $url_segment = 'allinoneaccessibility';
    private static $menu_icon_class = 'font-icon-accessibility';

 protected function init()
{
    parent::init();

    // Load CSS/JS assets
    Requirements::javascript('https://code.jquery.com/jquery-3.6.4.min.js');
  
Requirements::javascript('_resources/skynettechnologies/silverstripe-allinoneaccessibility/client/dist/javascript/jquery.aioa.js');
Requirements::css('_resources/skynettechnologies/silverstripe-allinoneaccessibility/client/dist/css/jquery.aioa.css');

}

    /**
     * Render admin page with PHP, HTML, and JS in one function
     */
    public function getEditForm($id = null, $fields = null)
    {
        $websitename = $_SERVER['HTTP_HOST'];
       // $websitename = 'silverstripeeutest3.dev.us';
        // Display the server host URL


        // Add user API
        $packageType = "free-widget";
        // Array of details to send
        $arrDetails = array(
            'name' => $websitename,
            'email' => 'no-reply@' . base64_encode($websitename) . '.com',
            'company_name' => '',
            'website' => base64_encode($websitename),
            'package_type' => $packageType,
            'start_date' => date(DATE_ISO8601),
            'end_date' => '',
            'price' => '',
            'discount_price' => '0',
            'platform' => 'SilverStripe',
            'api_key' => '',
            'is_trial_period' => '',
            'is_free_widget' => '1',
            'bill_address' => '',
            'country' => '',
            'state' => '',
            'city' => '',
            'post_code' => '',
            'transaction_id' => '',
            'subscr_id' => '',
            'payment_source' => ''
        );
        // First API URL to fetch autologin link
        $apiUrl = "https://ada.skynettechnologies.us/api/get-autologin-link";

        // Set up cURL for the first API request
        $ch = curl_init($apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['website' => base64_encode($websitename)]));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json'
        ));
        // Execute the request and get the response
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
        }
        curl_close($ch);

        // Decode the response to check if the link is present
        $result = json_decode($response, true);
        if (isset($result['link'])) {
            // Successfully got the link


        } else {
            // Link not found, proceed with second API call
            // Second API URL to add user domain
            $secondApiUrl = "https://ada.skynettechnologies.us/api/add-user-domain";

            // Set up cURL for the second API request
            $ch = curl_init($secondApiUrl);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($arrDetails));
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json'
            ));
            // Execute the second request and get the response
            $response = curl_exec($ch);
            if (curl_errno($ch)) {
            }
            curl_close($ch);
            // Decode the second response to handle the result
            $data = json_decode($response, true);
        }



        // Create fields with HTML + inline JS
        $fields = FieldList::create(
          

            LiteralField::create(
                'CustomUI',
               '<h1> </h1>
                <style>
                        .btn [class*=" icon-"], .btn [class^=icon-], .s-btn [class*=" icon-"], .s-btn [class^=icon-], [class*=" icon-"], [class^=icon-], i.icon, span.icon {
                            /* background-repeat: no-repeat; */
                            /* background-size: contain; */
                            display: contents;
                            /* height: 16px; */
                            /* vertical-align: -3px; */
                            /* width: 16px; */
                        }
                        .hide
                        {
                            display : none!important;
                        }
                            .col-auto
                            {
                              padding-left:1.8em !important;
                            } 
                        @media (min-width: 768px) {
                            .col-sm-4  {
                                width: 100%;
                            }
                        }
                        [class^="icon-"], [class*=" icon-"] {
                            top: 3px;
                            display: inline-block;
                            font-family: var(--bs-font-monospace)!important;
                            font-style: normal;
                            font-weight: normal;
                            line-height: 1;
                            color: #646464!important;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            font-size: 25px;
                        }
                        .icon-custom-position-wrapper .custom-switcher .custom-switcher_label, .icon-custom-size-wrapper .custom-switcher .custom-switcher_label {
                            color:  #646464!important;
                            font-size: 18px;
                            font-weight: 700;
                            text-transform: none;
                        }
                        .all-in-one-accessibility-wrap .accessibility-settings .all-one-accessibility-form .icon-size-wrapper .option, .all-in-one-accessibility-wrap .accessibility-settings .all-one-accessibility-form .icon-type-wrapper .option {
                            width: 130px;
                            height: 130px;
                            padding: 10px !important;
                            text-align: center;
                            background-color: #3c007f !important;
                            outline: 4px solid #fff;
                            outline-offset: -4px;
                            border-radius: 10px;
                        }

                </style>
</head>

<body>

  <img src="https://ada.skynettechnologies.us/public/trial-assets/images/all-in-one-accessibility-logo.svg" alt="All in One Accessibility - Skynet Technologies" style="
    
    align-items: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    margin-top: 3em;
    top: unset;

">

  <input type="hidden" value="<?= $domain ?>" name="domain">
  <div class="shopify-wrap-block">
    <div class="container">
      <div class="set-width">
        <div class="all-in-one-accessibility-wrap">
          <div class="accessibility-settings">
            <div class="all-one-accessibility-form">
              <div class="all-one-accessibility-form-inner">

              
                <form class="form-horizontal" role="form" method="post" action="" style="margin: 0px 60px 0px 60px">


                  <div class="mb-3 row">
                    <div class="col-sm-12">
                      <div class="form-text">
                        <B>NOTE: Currently, All in One Accessibility is dedicated to enhancing accessibility
                          specifically for websites and online stores.</B>
                      </div>
                      <B>
                        <p class="form-text" id="upgrade_html_notes">Please <a
                            href="https://ada.skynettechnologies.us/trial-subscription" target="_blank">Upgrade</a>
                          to full
                          version of All in One Accessibility Pro with 10 days free trial</p>
                      </B>
                    </div>
                  </div>
              </div>
       

              <div class="mb-3 row " id="colorcode_html">
                <label for="inputPassword" class="col-sm-3 col-form-label">Hex color code:</label>
                <div class="col-sm-9">
                  <input type="text" name="colorcode" style="height:auto" class="form-control" id="colorcode" value="" />
                  <div class="form-text">You can customize the ADA Widget color. For example: FF5733</div>
                </div>
              </div>
              <div class="icon-custom-position-wrapper mb-3 row">
                <div class="mb-4 pe-0 ps-0">
                  <label class="custom-switcher ">
                    <span class="custom-switcher_right">
                      <input type="checkbox" id="custom-position-switcher" class="custom-switcher_inp_2"
                        value="1" />
                      <span class="custom-switcher_body" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Toggle to override <Top Left> position" data-bs-custom-class="switcher-tooltip">
                      </span>
                      <span class="fcol-sm-3 col-form-label">Enable precise accessibility widget icon position:</span>
                    </span>
                  </label>
                  <div class="custom-position-controls hide">
                    <div class="row">
                      <div class="col-auto">
                        <div class="input-group mb-3">
                           <input type="number" style="height:auto;border-bottom-right-radius: 0px;
                                  border-top-right-radius: 0px;" min="0" max="250" class="form-control" id="custom_position_x_value"
                            aria-label="Value in pixels" aria-describedby="pos-value-input_1" oninput="this.value = Math.min(Math.max(this.value, 0), 250)" />
                          <span class="input-group-text" style="height:auto" id="pos-value-input_1">PX</span>
                        </div>
                      </div>
                      <div class="col-auto">
                        <select class="form-select" style="height:auto" aria-label="Default select example">
                          <option selected value="cust-pos-to-the-right">To the right</option>
                          <option value="cust-pos-to-the-left">To the left</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-auto">
                        <div class="input-group mb-3">
                          <input type="number" style="height:auto;border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;" min="0" max="250" class="form-control" id="custom_position_y_value"
                            aria-label="Value in pixels" aria-describedby="pos-value-input_2" oninput="this.value = Math.min(Math.max(this.value, 0), 250)" />
                          <span class="input-group-text" style="height:auto" id="pos-value-input_2">PX</span>
                        </div>
                      </div>
                      <div class="col-auto">
                        <select class="form-select" style="height:auto" aria-label="Default select example">
                          <option selected value="cust-pos-to-the-lower">To the bottom</option>
                          <option value="cust-pos-to-the-upper">To the top</option>
                        </select>
                      </div>
                    </div>
                    <div class="description">0 - 250px are permitted values</div>
                  </div>
                </div>
              </div>
              <div class="mb-3 row widget-position" id="position_html">
                <label class="fcol-sm-3 col-form-label">Where would you like to place the accessibility icon on your
                  site?
                </label>
                <div class="col-sm-12 three-col">
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-top-left" name="position" value="top_left"
                      class="form-radio" />

                    <label for="edit-position-top-left" class="option">Top left</label>
                  </div>
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-top-center" name="position" value="top_center"
                      class="form-radio" />

                    <label for="edit-position-top-center" class="option">Top Center</label>
                  </div>
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-top-right" name="position" value="top_right"
                      class="form-radio" />

                    <label for="edit-position-top-right" class="option">Top Right</label>
                  </div>
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-middel-left" name="position" value="middel_left"
                      class="form-radio" />

                    <label for="edit-position-middel-left" class="option">Middle left</label>
                  </div>
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-middel-right" name="position" value="middel_right"
                      class="form-radio" />

                    <label for="edit-position-middel-right" class="option">Middle Right</label>
                  </div>
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-bottom-left" name="position" value="bottom_left"
                      class="form-radio" />

                    <label for="edit-position-bottom-left" class="option">Bottom left</label>
                  </div>
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-bottom-center" name="position" value="bottom_center"
                      class="form-radio" />

                    <label for="edit-position-bottom-center" class="option">Bottom Center</label>
                  </div>
                  <div
                    class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" id="edit-position-bottom-right" checked="" name="position"
                      value="bottom_right" class="form-radio" />

                    <label for="edit-position-bottom-right" class="option">Bottom Right</label>
                  </div>
                </div>
              </div>
              <!-- widget icon size -->
              <label class="fcol-sm-3 col-form-label">Select Widget Size:</label>

              <div class="form-radios  mb-3">
                <div class="form-radio-item">
                  <input data-drupal-selector="edit-widget-size-regularsize" aria-describedby="edit-widget-size--description" type="radio" id="edit-widget-size-regularsize" name="widget_size" value="0" checked="checked" class="form-radio form-boolean form-boolean--type-radio" wfd-id="id15">
                  <label for="edit-widget-size-regularsize" class="form-item__label option">Regular Size</label>
                </div>
                <div class="form-radio-item">
                  <input data-drupal-selector="edit-widget-size-oversize" aria-describedby="edit-widget-size--description" type="radio" id="edit-widget-size-oversize" name="widget_size" value="1" class="form-radio form-boolean form-boolean--type-radio" wfd-id="id16">
                  <label for="edit-widget-size-oversize" class="form-item__label option">Oversize</label>
                </div>
                <div style="font-size: small;" id="edit-widget-size--wrapper--description" data-drupal-field-elements="description" class="fieldset__description">It only works on desktop view.</div>
              </div>


              <div class="icon-type-wrapper row " id="select_icon_type">
                <label class="fcol-sm-12 col-form-label" style="margin-left: -10.500px; margin-right: -10.500px;">Select icon type:</label>
                <div class="col-sm-12" style=" margin-right: -15px;">
                  <div class="row">
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-1" checked="" name="aioa_icon_type"
                          value="aioa-icon-type-1" class="form-radio" />
                        <label for="edit-type-1" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 1</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-2" name="aioa_icon_type" value="aioa-icon-type-2"
                          class="form-radio" />
                        <label for="edit-type-2" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-2.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 2</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-3" name="aioa_icon_type" value="aioa-icon-type-3"
                          class="form-radio" />
                        <label for="edit-type-3" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-3.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 3</span>
                        </label>
                      </div>
                    </div>

                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-4" name="aioa_icon_type" value="aioa-icon-type-4"
                          class="form-radio" />
                        <label for="edit-type-4" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-4.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 4</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-5" name="aioa_icon_type" value="aioa-icon-type-5"
                          class="form-radio" />
                        <label for="edit-type-5" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-5.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 5</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-6" name="aioa_icon_type" value="aioa-icon-type-6"
                          class="form-radio" />
                        <label for="edit-type-6" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-6.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 6</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-7" name="aioa_icon_type" value="aioa-icon-type-7"
                          class="form-radio" />
                        <label for="edit-type-7" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-7.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 7</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-8" name="aioa_icon_type" value="aioa-icon-type-8"
                          class="form-radio" />
                        <label for="edit-type-8" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-8.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 8</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-9" name="aioa_icon_type" value="aioa-icon-type-9"
                          class="form-radio" />
                        <label for="edit-type-9" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-9.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 9</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-10" name="aioa_icon_type" value="aioa-icon-type-10"
                          class="form-radio" />
                        <label for="edit-type-10" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-10.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 10</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-11" name="aioa_icon_type" value="aioa-icon-type-11"
                          class="form-radio" />
                        <label for="edit-type-11" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-11.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 11</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-12" name="aioa_icon_type" value="aioa-icon-type-12"
                          class="form-radio" />
                        <label for="edit-type-12" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-12.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 12</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-13" name="aioa_icon_type" value="aioa-icon-type-13"
                          class="form-radio" />
                        <label for="edit-type-13" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-13.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 13</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-14" name="aioa_icon_type" value="aioa-icon-type-14"
                          class="form-radio" />
                        <label for="edit-type-14" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-14.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 14</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-15" name="aioa_icon_type" value="aioa-icon-type-15"
                          class="form-radio" />
                        <label for="edit-type-15" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-15.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 15</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-16" name="aioa_icon_type" value="aioa-icon-type-16"
                          class="form-radio" />
                        <label for="edit-type-16" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-16.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 16</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-17" name="aioa_icon_type" value="aioa-icon-type-17"
                          class="form-radio" />
                        <label for="edit-type-17" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-17.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 17</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-18" name="aioa_icon_type" value="aioa-icon-type-18"
                          class="form-radio" />
                        <label for="edit-type-18" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-18.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 18</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-19" name="aioa_icon_type" value="aioa-icon-type-19"
                          class="form-radio" />
                        <label for="edit-type-19" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-19.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 19</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-20" name="aioa_icon_type" value="aioa-icon-type-20"
                          class="form-radio" />
                        <label for="edit-type-20" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-20.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 20</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-21" name="aioa_icon_type" value="aioa-icon-type-21"
                          class="form-radio" />
                        <label for="edit-type-21" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-21.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 21</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-22" name="aioa_icon_type" value="aioa-icon-type-22"
                          class="form-radio" />
                        <label for="edit-type-22" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-22.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 22</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-23" name="aioa_icon_type" value="aioa-icon-type-23"
                          class="form-radio" />
                        <label for="edit-type-23" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-23.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 23</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-24" name="aioa_icon_type" value="aioa-icon-type-24"
                          class="form-radio" />
                        <label for="edit-type-24" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-24.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 24</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-25" name="aioa_icon_type" value="aioa-icon-type-25"
                          class="form-radio" />
                        <label for="edit-type-25" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-25.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 25</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-26" name="aioa_icon_type" value="aioa-icon-type-26"
                          class="form-radio" />
                        <label for="edit-type-26" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-26.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 26</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-27" name="aioa_icon_type" value="aioa-icon-type-27"
                          class="form-radio" />
                        <label for="edit-type-27" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-27.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 27</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-28" name="aioa_icon_type" value="aioa-icon-type-28"
                          class="form-radio" />
                        <label for="edit-type-28" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-28.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 28</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-type-29" name="aioa_icon_type" value="aioa-icon-type-29"
                          class="form-radio" />
                        <label for="edit-type-29" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-29.svg"
                            width="65" height="65" style="height: 65px;" />
                          <span class="visually-hidden">Type 29</span>
                        </label>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="icon-custom-size-wrapper mb-3 row">
                  <div class="col-sm-12">
                    <label class="custom-switcher">
                      <span class="custom-switcher_right">
                        <input type="checkbox" id="custom-ssize-switcher" class="custom-switcher_inp_2" value="1" />
                        <span class="custom-switcher_body" data-bs-toggle="tooltip" data-bs-placement="bottom"
                          title="Toggle to override selected size" data-bs-custom-class="switcher-tooltip">
                        </span>
                        <span class="fcol-sm-3 col-form-label">Enable icon custom size:</span>
                      </span>
                    </label>
                    <div class="custom-size-controls hide">
                      <div class="row">

                      </div>
                      <div class="col-auto controls ms-0">
                        <label for="exact-icon-size" class="fcol-sm-3 col-form-label">Select exact icon size:</label>
                        <div class="input-group mb-2">
                        <input type="number" class="form-control" style="height:auto" id="widget_icon_size_custom" name="widget_icon_size_custom" min="20" max="150" onblur="validateWidgetIconSize(this)">
                        
                        <span class="input-group-text" style="height:auto" id="size-value-input_1">PX</span>
                        </div>
                        <div class="description">20 - 150px are permitted values</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="icon-size-wrapper widget-icon row " id="select_icon_size">
                <label class="fcol-sm-12 col-form-label">Select icon size for Desktop: </label>

                <div class="col-sm-12" style="padding-right: calc(var(--bs-gutter-x)* .2);padding-left: calc(var(--bs-gutter-x)* .2);">
                  <div class="row">
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-big" name="aioa_icon_size" value="aioa-big-icon"
                          class="form-radio" />
                        <label for="edit-size-big" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="75" height="75" style="height: 75px;" class="iconimg" />
                          <span class="visually-hidden">Big</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-medium" checked="" name="aioa_icon_size"
                          value="aioa-medium-icon" class="form-radio" />
                        <label for="edit-size-medium" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="65" height="65" style="height: 65px;" class="iconimg" />
                          <span class="visually-hidden">Medium</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-default" name="aioa_icon_size" value="aioa-default-icon"
                          class="form-radio" />
                        <label for="edit-size-default" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="55" height="55" style="height: 55px;" class="iconimg" />
                          <span class="visually-hidden">Default</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-small" name="aioa_icon_size" value="aioa-small-icon"
                          class="form-radio" />
                        <label for="edit-size-small" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="45" height="45" style="height: 45px;" class="iconimg" />
                          <span class="visually-hidden">Small</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-extra-small" name="aioa_icon_size"
                          value="aioa-extra-small-icon" class="form-radio" />
                        <label for="edit-size-extra-small" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="35" height="35" style="height: 35px;" class="iconimg" />
                          <span class="visually-hidden">Extra Small</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="icon-size-wrapper row" style="display: none">
                <label class="fcol-sm-12 col-form-label">Select icon size for mobile: </label>
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-big" name="aioa_icon_size_mb" value="aioa-big-icon-mb"
                          class="form-radio" />
                        <label for="edit-size-big" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="75" height="75" />
                          <span class="visually-hidden">Big</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-medium" checked="" name="aioa_icon_size_mb"
                          value="aioa-medium-icon-mb" class="form-radio" />
                        <label for="edit-size-medium" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="65" height="65" />
                          <span class="visually-hidden">Medium</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-default" name="aioa_icon_size_mb"
                          value="aioa-default-icon-mb" class="form-radio" />
                        <label for="edit-size-default" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="55" height="55" />
                          <span class="visually-hidden">Default</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-small" name="aioa_icon_size_mb" value="aioa-small-icon-mb"
                          class="form-radio" />
                        <label for="edit-size-small" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="45" height="45" />
                          <span class="visually-hidden">Small</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-auto mb-30">
                      <div
                        class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                        <input type="radio" id="edit-size-extra-small" name="aioa_icon_size_mb"
                          value="aioa-extra-small-icon-mb" class="form-radio" />
                        <label for="edit-size-extra-small" class="option">
                          <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                            width="35" height="35" />
                          <span class="visually-hidden">Extra Small</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="save-changes-btn">
                <!-- <button type="button" id="submit"  class="btn btn-primary" style="padding: 2%;background-color: #420083;
                    ">Save Changes</button> -->
                <button type="button" id="submitaio" class="btn btn-primary float-right">Save Changes</button>


                <div class="mt-3 row " id="save-changes-success">
                  <div class="col-sm-12">
                    <div class="form-text">It may take a few seconds for changes to appear on your website. If you
                      dont see the changes, try clearing your browser cache or checking in a private browsing window.
                    </div>
                  </div>
                </div>


              </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>'        )
        );
       

        return Form::create($this, 'EditForm', $fields, FieldList::create());
    }
}
