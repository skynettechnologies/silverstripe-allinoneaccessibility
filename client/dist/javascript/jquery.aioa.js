 const domain = window.location.host;
  console.log("domain : " + domain);
    const defaultSettings = {
      widget_position: "bottom_right",
      widget_color_code: "#420083",
      widget_icon_type: "aioa-icon-type-1",
      widget_icon_size: "aioa-small-icon",
    };

    // Load settings from sessionStorage or cookies

    var domain_name = domain;

    // var domain_name = document.getElementById('domain-list').options[0].text;
    var website_name = btoa(domain_name);

    fetchApiResponse(domain_name);
    // Fetch API response for the updated domain
    // Set the initial domain name and fetch API response on page load
    window.onload = function() {

      website_name = btoa(domain_name);

      fetchApiResponse(domain_name);

      // Fetch initial response for the default domain
    };
function validateWidgetIconSize(input) {
    const val = input.value.trim();
    input.value = val === '' ? 20 : Math.min(Math.max(parseInt(val), 20), 150);
}

    // Function to fetch API response using POST
    // Fetch widget settings
    function fetchApiResponse(domain_name) {
      const apiUrl = "https://ada.skynettechnologies.us/api/widget-settings";

      fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json" // Specify the content type
          },
          body: JSON.stringify({
            website_url: domain_name
          }) // Pass the domain name in the request body
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Parse the JSON response
        })
        .then((result) => {
          // Check if result and result.Data are valid
          if (result && result.Data && Object.keys(result.Data).length > 0) {

            is_widget_custom_position = result.Data.is_widget_custom_position
            is_widget_custom_size = result.Data.is_widget_custom_size
            const settings = {
              widget_position: result.Data.widget_position || defaultSettings.widget_position,
              widget_color_code: result.Data.widget_color_code || defaultSettings.widget_color_code,
              widget_icon_type: result.Data.widget_icon_type || defaultSettings.widget_icon_type,
              widget_icon_size: result.Data.widget_icon_size || defaultSettings.widget_icon_size,
              widget_size: result.Data.widget_size || defaultSettings.widget_size,
              widget_icon_size_custom: result.Data.widget_icon_size_custom || defaultSettings.widget_icon_size_custom,
              widget_position_top: result.Data.widget_position_top,
              widget_position_bottom: result.Data.widget_position_bottom,
              widget_position_left: result.Data.widget_position_left,
              widget_position_right: result.Data.widget_position_right,
              is_widget_custom_size: result.Data.is_widget_custom_size || 0,
              is_widget_custom_position: result.Data.is_widget_custom_position || 0,
            };

            populateSettings(settings);
            // You can process the settings here or pass them to another function
          } else {


          }
        })
        .catch(error => {
          console.error("Error fetching API:", error);
          // Handle error scenarios like invalid response or network issues
        });
    }

    function fetchSettings() {
      const requestOptions = {
        method: "POST",
        redirect: "follow"
      };

      fetch(`https://ada.skynettechnologies.us/api/widget-settings?website_url=${domain_name}`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse JSON response
        })
        .then((result) => {
          // Check if result and result.Data are valid
          if (result && result.Data && Object.keys(result.Data).length > 0) {
            console.log("Widget settings fetched:", result.Data);
          } else {

          }
        })
        .catch((error) => {
          console.error("Error fetching widget settings:", error);
          alert("Failed to fetch settings. Using default values.");

        });


    }

    // Populate form fields with settings
    function populateSettings(settings) {

      if (settings.is_widget_custom_size == 1) {
        document.getElementById("custom-ssize-switcher").checked = true;
        const event = new Event('change');
        document.getElementById("custom-ssize-switcher").dispatchEvent(event);
        $(".custom-size-controls").removeClass("hide");
        $(".widget-icon").addClass("hide");
      } else {
        document.getElementById("custom-ssize-switcher").checked = false;
        const event = new Event('change');
        document.getElementById("custom-ssize-switcher").dispatchEvent(event);
        $(".custom-size-controls").addClass("hide");
        $(".widget-icon").removeClass("hide");
      }

      if (settings.is_widget_custom_position == 1) {
        document.getElementById("custom-position-switcher").checked = true;
        const event = new Event('change');
        document.getElementById("custom-position-switcher").dispatchEvent(event);
        $(".custom-position-controls").removeClass("hide");
        $(".widget-position").addClass("hide");
      } else {
        document.getElementById("custom-position-switcher").checked = false;
        const event = new Event('change');
        document.getElementById("custom-position-switcher").dispatchEvent(event);
        $(".custom-position-controls").addClass("hide");
        $(".widget-position").removeClass("hide");
      }


      const colorField = document.getElementById("colorcode");
      if (colorField) {
        colorField.value = settings.widget_color_code;
      }
      const typeOptions = document.querySelectorAll('input[name="aioa_icon_type"]');

      typeOptions.forEach((option) => {
        if (option.value === settings.widget_icon_type) {
          option.checked = true;
        }
      });

      const sizeOptions = document.querySelectorAll('input[name="aioa_icon_size"]');
      sizeOptions.forEach((option) => {
        if (option.value === settings.widget_icon_size) {
          option.checked = true;
        }
      });

      const iconImg = `https://www.skynettechnologies.com/sites/default/files/${settings.widget_icon_type}.svg`;
      $(".iconimg").attr("src", iconImg);

      const widget_icon_size_custom = document.getElementById("widget_icon_size_custom");
      if (widget_icon_size_custom) {
        widget_icon_size_custom.value = settings.widget_icon_size_custom;
      }
      const positionRadio = document.querySelector(`input[name="position"][value="${settings.widget_position}"]`);
      if (positionRadio) {
        positionRadio.checked = true;
      }
      const widget_size = document.querySelector(`input[name="widget_size"][value="${settings.widget_size}"]`);
      if (widget_size) {
        widget_size.checked = true;
      }


// X-axis (horizontal) position
const customPositionXField = document.getElementById("custom_position_x_value");
const xDirectionSelect = $(".custom-position-controls select")[0];

if (customPositionXField && xDirectionSelect) {
  if (settings.widget_position_right != null && settings.widget_position_right >= 0) {
    customPositionXField.value = settings.widget_position_right;
    xDirectionSelect.value = "cust-pos-to-the-right";
  } else if (settings.widget_position_left != null && settings.widget_position_left >= 0) {
    customPositionXField.value = settings.widget_position_left;
    xDirectionSelect.value = "cust-pos-to-the-left";
  } else {
    customPositionXField.value = 0; // default
    xDirectionSelect.value = "cust-pos-to-the-right"; // default direction
  }
}

// Y-axis (vertical) position
const customPositionYField = document.getElementById("custom_position_y_value");
const yDirectionSelect = $(".custom-position-controls select")[1];

if (customPositionYField && yDirectionSelect) {
  if (settings.widget_position_bottom != null && settings.widget_position_bottom >= 0) {
    customPositionYField.value = settings.widget_position_bottom;
    yDirectionSelect.value = "cust-pos-to-the-lower";
  } else if (settings.widget_position_top != null && settings.widget_position_top >= 0) {
    customPositionYField.value = settings.widget_position_top;
    yDirectionSelect.value = "cust-pos-to-the-upper";
  } else {
    customPositionYField.value = 0; // default
    yDirectionSelect.value = "cust-pos-to-the-lower"; // default direction
  }
}

    }


    // Fetch settings when the page loads
    window.onload = function() {
      fetchSettings();
      domain_name = domain;

      website_name = btoa(domain_name);

      fetchApiResponse(domain_name);


    };

    $(document).ready(function() {


      // Custom Switchers
      $("#custom-position-switcher").click(function() {
       
        $(".custom-position-controls").toggleClass("hide");
        $(".widget-position").toggleClass("hide");

      });
      $("#custom-ssize-switcher").click(function() {
        $(".custom-size-controls").toggleClass("hide");
        $(".widget-icon").toggleClass("hide");
      });
    });

    const sizeOptions = document.querySelectorAll('input[name="aioa_icon_size"]');
    const sizeOptionsImg = document.querySelectorAll('input[name="aioa_icon_size"] + label img');
    const typeOptions = document.querySelectorAll('input[name="aioa_icon_type"]');
    const positionOptions = document.querySelectorAll('input[name="position"]');
    const custSizePreview = document.querySelector(".custom-size-preview img");
    const custSizePreviewLabel = document.querySelector(".custom-size-preview .value span");

    // Set default value to custom position inputs
    var positions = {
      top_left: [20, 20],
      middel_left: [20, 50],
      bottom_center: [50, 20],
      top_center: [50, 20],
      middel_right: [20, 50],
      bottom_right: [20, 20],
      top_right: [20, 20],
      bottom_left: [20, 20],
    };
    positionOptions.forEach((option) => {
      var ico_position = document.querySelector('input[name="position"]:checked').value;
      document.getElementById("custom_position_x_value").value = positions[ico_position][0];
      document.getElementById("custom_position_y_value").value = positions[ico_position][1];
      option.addEventListener("click", (event) => {
        var ico_position = document.querySelector('input[name="position"]:checked').value;
        document.getElementById("custom_position_x_value").value = positions[ico_position][0];
        document.getElementById("custom_position_y_value").value = positions[ico_position][1];
      });
    });

    // Set icon on type select
    typeOptions.forEach((option) => {
      option.addEventListener("click", (event) => {
        var ico_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;

        sizeOptionsImg.forEach((option2) => {
          option2.setAttribute("src", "https://www.skynettechnologies.com/sites/default/files/" + ico_type + ".svg");
        });
        custSizePreview.setAttribute("src", "https://www.skynettechnologies.com/sites/default/files/" + ico_type + ".svg");
      });
    });

    // Set icon on size select
    sizeOptions.forEach((option) => {
      var ico_size_value = document
        .querySelector('input[name="aioa_icon_size"]:checked + label img')
        .getAttribute("width");

      // Set default value to custom size input
      const widget_icon_size_custom = document.getElementById("widget_icon_size_custom");
      document.getElementById("widget_icon_size_custom").value = widget_icon_size_custom;


      option.addEventListener("click", (event) => {
        var ico_width = document
          .querySelector('input[name="aioa_icon_size"]:checked + label img')
          .getAttribute("width");
        var ico_height = document
          .querySelector('input[name="aioa_icon_size"]:checked + label img')
          .getAttribute("height");
        custSizePreview.setAttribute("width", ico_width);
        custSizePreview.setAttribute("height", ico_height);
        document.getElementById("widget_icon_size_custom").value = ico_width;
        custSizePreviewLabel.innerHTML = ico_width;
      });
    });

    // Set icons size on input change
    document.getElementById("widget_icon_size_custom").addEventListener("input", function() {
      var ico_size_value = document.getElementById("widget_icon_size_custom").value;
      if (ico_size_value >= 20 && ico_size_value <= 150) {
        custSizePreview.setAttribute("width", ico_size_value);
        custSizePreview.setAttribute("height", ico_size_value);
        custSizePreviewLabel.innerHTML = ico_size_value;
      }

    });




    // <!-- API -->


    $('input[name="position"]').change(function() {
      var icon_position = document.querySelector('input[name="position"]:checked').value;
    });

    $('input[name="aioa_icon_type"]').change(function() {
      var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;
    });
    $('input[name="aioa_icon_size"]').change(function() {
      var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;
    });


    var colorcode = $("#colorcode").val();
    if (colorcode == "") {
      colorcode = "420083";
    }
    var icon_position = document.querySelector('input[name="position"]:checked').value;
    var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;
    var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;

    $('#license_key,#colorcode').change(function() {
      var license_key = $("#license_key").val();
      var colorcode = $("#colorcode").val();
      //var checkedValue = $('.messageCheckbox:checked').val();
    })
    $('input[name="position"]').change(function() {
      var icon_position = document.querySelector('input[name="position"]:checked').value;
    });

    $('input[name="aioa_icon_type"]').change(function() {
      var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;

    });
    $('input[name="aioa_icon_size"]').change(function() {
      var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;

    });


    // Set the initial server name and display it
    window.onload = function() {
      var server_name = domain
    };

    // Function to update the server name on dropdown change


    // Handle click event for custom position switcher
    let is_widget_custom_position = 0; // Initialize the variable
    let is_widget_custom_size = 0;

    $("#custom-position-switcher").click(function() {
      // Toggle between 1 and 0
      // is_widget_custom_position = 1;
      is_widget_custom_position = $(this).is(":checked") ? 1 : 0;


    });
    $("#custom-ssize-switcher").click(function() {
      // is_widget_custom_size = 1;
      is_widget_custom_size = $(this).is(":checked") ? 1 : 0;

    });
    // Log current value for debugging purposes

    document.getElementById("submitaio").addEventListener("click", function() {
    

 
      var server_name = domain;

      // Update settings
      var colorcode = $("#colorcode").val();
      var icon_position = document.querySelector('input[name="position"]:checked').value;
      var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;
      var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;
      var widget_size = document.querySelector('input[name="widget_size"]:checked').value;
      var widget_icon_size_custom = $("#widget_icon_size_custom").val();

      const custom_position_x = $("#custom_position_x_value").val() || null; // Default to 0 if no value
      const custom_position_y = $("#custom_position_y_value").val() || null;
      const x_position_direction = $(".custom-position-controls select").eq(0).val();
      const y_position_direction = $(".custom-position-controls select").eq(1).val();

      // Initialize widget position values
      let widget_position_right = null;
      let widget_position_left = null;
      let widget_position_top = null;
      let widget_position_bottom = null;

      // Update widget position based on the selected directions
      if (x_position_direction === "cust-pos-to-the-right") {
        widget_position_right = custom_position_x;
      } else if (x_position_direction === "cust-pos-to-the-left") {
        widget_position_left = custom_position_x;
      }
  
     
      if (y_position_direction === "cust-pos-to-the-lower") {
        widget_position_bottom = custom_position_y;
      } else if (y_position_direction === "cust-pos-to-the-upper") {
        widget_position_top = custom_position_y;
        
      }
     
 
      var url = 'https://ada.skynettechnologies.us/api/widget-setting-update-platform';

    
      var payload = {
        u: server_name,
        widget_position: icon_position,
        is_widget_custom_position: is_widget_custom_position,
        is_widget_custom_size: is_widget_custom_size,
        widget_color_code: colorcode,
        widget_icon_type: icon_type,
        widget_icon_size: icon_size,
        widget_size: widget_size,
        widget_icon_size_custom: widget_icon_size_custom,

        widget_position_right: widget_position_right,
        widget_position_left: widget_position_left,
        widget_position_top: widget_position_top,
        widget_position_bottom: widget_position_bottom
      };



      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
 
      xhr.onload = function () {


        if (xhr.status === 200) {
          try {
            var response = JSON.parse(xhr.responseText);
   
            // Success alert
            if (response.msg) {
              alert(response.msg);
            } else {
              alert('Website Widget Settings saved successfully!');
            }

            location.reload();

          } catch (e) {
            console.error('Invalid JSON response:', xhr.responseText);
            alert('Settings saved, but response format is invalid.');
          }
        } else {
          console.error('HTTP Error:', xhr.status, xhr.statusText);
          alert('Error: Unable to update widget settings.');
        }
      };

      xhr.onerror = function () {
        console.error('Network error');
        alert('Network error. Please check your internet connection.');
      };

      xhr.send(JSON.stringify(payload));
   });
