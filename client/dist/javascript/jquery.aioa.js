
    hideshow($(".is_valid_key").val());
    var bannerDiv = document.createElement("div");
    bannerDiv.id = 'dicount_banner';
    document.getElementById('Root_AllInOneAccessibility').prepend(bannerDiv);

    var iDiv = document.createElement("div");
    iDiv.id = 'licenseKeymsg';
    document.querySelector('#Form_EditForm_AioaWidgetLicenseKey_Holder .form__field-holder').appendChild(iDiv);

    let img = document.createElement('img');
    img.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-1.svg';
    img.id = 'aioa-icon-type-1';
    document.querySelectorAll("input[name='AioaWidgetIconType']")[0].parentElement.appendChild(img);

    let img1 = document.createElement('img');
    img1.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-2.svg';
    img1.id = 'aioa-icon-type-2';
    document.querySelectorAll("input[name='AioaWidgetIconType']")[1].parentElement.appendChild(img1);

    let img2 = document.createElement('img');
    img2.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-3.svg';
    img2.id = 'aioa-icon-type-3';
    document.querySelectorAll("input[name='AioaWidgetIconType']")[2].parentElement.appendChild(img2);

    var selected_type = document.querySelector('input[name="AioaWidgetIconType"]:checked').id;
    const myArray = selected_type.split("_");
    var temp = myArray[myArray.length - 1];

    if((myArray[myArray.length - 1]) != '' && (myArray[myArray.length - 1]) != 'undefined'){
        var type = myArray[myArray.length - 1];
    }else{
        var type = 1;
    }

    let img_size = document.createElement('img');
    img_size.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-'+type+'.svg';
    img_size.id = 'aioa-big-icon';
    img_size.setAttribute("data-class", "icon-img");
    img_size.width = '75';
    img_size.height = '75';
    document.querySelectorAll("input[name='AioaWidgetIconSize']")[0].parentElement.appendChild(img_size);

    let img_size1= document.createElement('img');
    img_size1.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-'+type+'.svg';
    img_size1.id = 'aioa-medium-icon';
    img_size1.setAttribute("data-class", "icon-img");
    img_size1.width = '65';
    img_size1.height = '65';
    document.querySelectorAll("input[name='AioaWidgetIconSize']")[1].parentElement.appendChild(img_size1);

    let img_size2 = document.createElement('img');
    img_size2.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-'+type+'.svg';
    img_size2.id = 'aioa-default-icon';
    img_size2.setAttribute("data-class", "icon-img");
    img_size2.width = '55';
    img_size2.height = '55';
    document.querySelectorAll("input[name='AioaWidgetIconSize']")[2].parentElement.appendChild(img_size2);

    let img_size3 = document.createElement('img');
    img_size3.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-'+type+'.svg';
    img_size3.id = 'aioa-small-icon';
    img_size3.setAttribute("data-class", "icon-img");
    img_size3.width = '45';
    img_size3.height = '45';
    document.querySelectorAll("input[name='AioaWidgetIconSize']")[3].parentElement.appendChild(img_size3);

    let img_size4 = document.createElement('img');
    img_size4.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-'+type+'.svg';
    img_size4.id = 'aioa-extra-small-icon';
    img_size4.setAttribute("data-class", "icon-img");
    img_size4.width = '35';
    img_size4.height = '35';
    document.querySelectorAll("input[name='AioaWidgetIconSize']")[4].parentElement.appendChild(img_size4);
    // var items = document.querySelectorAll("input[name='AioaWidgetIconSize']");

    // for (var i = items.length; i--;) {
    //     console.log(i)
    //     let img_size = document.createElement('img');
    //     img_size.src = 'https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-3.svg';
    //     document.querySelectorAll("input[name='AioaWidgetIconSize']")[i].parentElement.appendChild(img_size);
    // }
    function setCouponBanner(){
        var coupon_url = 'https://www.skynettechnologies.com/add-ons/discount_offer.php?platform=contao';
        fetch(coupon_url)
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            $("#dicount_banner").html(body);
            var domain_name = window.location.origin
            $('#licenseKeymsg').html("<span class='text-danger'>Key is Invalid!</span><p>Please <a href='https://www.skynettechnologies.com/add-ons/cart/?add-to-cart=116&variation_id=117&variation_id=117&quantity=1&utm_source="+domain_name+"&utm_medium=typo3-extension&utm_campaign=purchase-plan' target='_blank'>Upgrade </a> to full version of All in One Accessibility Pro.</p>")
        });
    }

    $("#Form_EditForm_AioaWidgetLicenseKey").keyup(function(){
        
        var server_name = "localhost";
        var request = new XMLHttpRequest();
        var url =  'https://www.skynettechnologies.com/add-ons/license-api.php?';
        var params = "token=" + $(this).val() +"&server_name=" + server_name;

        request.open('POST', url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var response = JSON.parse(request.response);
                hideshow(response.valid);
                saveData();
                // if (response.valid == 1) {
                //     $(".icontype-class").show();
                //     $(".iconsize-class").show();
                //     $("#dicount_banner").hide();   
                // }else{
                //     $(".icontype-class").hide();
                //     $(".iconsize-class").hide();
                //     setCouponBanner();
                // }
                $(".is_valid_key").val(response.valid);
            }
            }
        };
        request.send(params);   
    });

    $("#Form_EditForm_AioaWidgetIconType").change(function(){
        var arrSize = document.querySelectorAll(`[data-class*="icon-img"]`);
        var img_val = $('#Form_EditForm_AioaWidgetIconType li.selected img').attr('id')
        arrSize.forEach(function(item){
            item.setAttribute("src","https://skynettechnologies.com/sites/default/files/python/"+img_val+".svg");
        });
        
    });

    document.getElementById("Form_EditForm").onsubmit = function(){
        location.reload(true);
    }

    function saveData(){
        var server_name = window.location.origin;
        var color = $('#Form_EditForm_AioaWidgetColor').val();
        var position = $('#Form_EditForm_AioaWidgetPosition ul li.selected label input').val();
        var icon_type = $('#Form_EditForm_AioaWidgetIconType ul li.selected label input').val();
        var icon_size = $('#Form_EditForm_AioaWidgetIconSize ul li.selected label input').val();
        
        var request = new XMLHttpRequest();
        var url =  'https://ada.skynettechnologies.us/api/widget-setting-update-platform';
        var params = "u=" + server_name +"&widget_position=" + position +"&widget_color_code=" + color +"&widget_icon_type=" + icon_type +"&widget_icon_size="+ icon_size;
    
        request.open('POST', url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200) {
                }
            }
          };
          request.send(params);
    }

    function hideshow(validKey){
        if(validKey == 1){
            console.log(1);
            $(".icontype-class").show();
            $(".iconsize-class").show();
            $("#dicount_banner").hide();  
            $("#licenseKeymsg").hide();  
        }else{
            console.log(2);
            $("#dicount_banner").show();  
            $("#licenseKeymsg").show();  
            $(".icontype-class").hide();
            $(".iconsize-class").hide();
            setCouponBanner();
        }
    }