// Custom Js code

const domain = window.location.hostname;
      
console.log("domain : "+domain);

// Default widget Setting data
const defaultSettings = {
  widget_position: "bottom_right",
  widget_color_code: "#861818",
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
    window.onload = function () {
       
         website_name = btoa(domain_name);
        
        fetchApiResponse(domain_name);
      
        // Fetch initial response for the default domain
    };

    // Function to update the domain name on dropdown change
   

    // Function to fetch API response using POST
    function fetchApiResponse(domain_name) {
        const apiUrl = "https://ada.skynettechnologies.us/api/widget-settings";
        
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Specify the content type
            },
            body: JSON.stringify({ website_url: domain_name }) // Pass the domain name in the request body
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
             console.log(result.Data);
              const settings = {
                  widget_position: result.Data.widget_position || defaultSettings.widget_position,
                  widget_color_code: result.Data.widget_color_code || defaultSettings.widget_color_code,
                  widget_icon_type: result.Data.widget_icon_type || defaultSettings.widget_icon_type,
                  widget_icon_size: result.Data.widget_icon_size || defaultSettings.widget_icon_size,
                  widget_size: result.Data.widget_size || defaultSettings.widget_size,
                  widget_icon_size_custom: result.Data.widget_icon_size_custom || defaultSettings.widget_icon_size_custom,
                  is_widget_custom_size: result.Data.is_widget_custom_size || defaultSettings.is_widget_custom_size,
                  is_widget_custom_position: result.Data.is_widget_custom_position || defaultSettings.is_widget_custom_position,
                  widget_position_top: result.Data.widget_position_top || 0,
                  widget_position_bottom: result.Data.widget_position_bottom || 0,
                  widget_position_left: result.Data.widget_position_left || 0,
                  widget_position_right: result.Data.widget_position_right || 0,
                };
             
                populateSettings(settings);
                populatecustom(settings);
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

 // custom size switcher
  if (settings.is_widget_custom_size === 1) {
    $("#custom-size-switcher").prop("checked", true); // Check the checkbox
    $(".custom-size-controls").removeClass("hide"); // Show custom size controls
    $(".widget-icon").addClass("hide"); // Hide widget icon
  } else {
    console.log("settings1"+settings.is_widget_custom_size);
    $("#custom-size-switcher").prop("checked", false); // Uncheck the checkbox
    $(".custom-size-controls").addClass("hide"); // Hide custom size controls
    $(".widget-icon").removeClass("hide"); // Show widget icon
  }

  // Toggle behavior for #custom-size-switcher
  $("#custom-size-switcher").click(function () {


    settings.is_widget_custom_size = $(this).is(":checked") ? 1 : 0; // Update the value
    if (settings.is_widget_custom_size === 1) {
      $(".custom-size-controls").removeClass("hide");
      $(".widget-icon").addClass("hide");
    } else {
      console.log("settings2"+settings.is_widget_custom_size);
      $(".custom-size-controls").addClass("hide");
      $(".widget-icon").removeClass("hide");
    }
  });

  // Simulated API update after fetching settings
  setTimeout(() => {
   
    $("#custom-size-switcher").prop("checked", settings.is_widget_custom_size === 1);
    if (settings.is_widget_custom_size === 1) {
      $(".custom-size-controls").removeClass("hide");
      $(".widget-icon").addClass("hide");
    } else {
      console.log("settings3"+settings.is_widget_custom_size);
      $(".custom-size-controls").addClass("hide");
      $(".widget-icon").removeClass("hide");
    }
  }, 1000);


// custom position switcher
if (settings.is_widget_custom_position === 1) {
  $("#custom-position-switcher").prop("checked", true); // Check the checkbox
  $(".custom-position-controls").removeClass("hide"); // Show custom size controls
  $(".widget-position").addClass("hide"); // Hide widget icon
} else {
  console.log("settings1"+settings.is_widget_custom_position);
  $("#custom-position-switcher").prop("checked", false); // Uncheck the checkbox
  $(".custom-position-controls").addClass("hide"); // Hide custom size controls
  $(".widget-position").removeClass("hide"); // Show widget icon
}

// Toggle behavior for #custom-size-switcher
$("#custom-position-switcher").click(function () {


  settings.is_widget_custom_position = $(this).is(":checked") ? 1 : 0; // Update the value
  if (settings.is_widget_custom_position === 1) {
    $(".custom-position-controls").removeClass("hide");
    $(".widget-position").addClass("hide");
  } else {
    console.log("settings2"+settings.is_widget_custom_position);
    $(".custom-position-controls").addClass("hide");
    $(".widget-position").removeClass("hide");
  }
});

// Simulated API update after fetching settings
setTimeout(() => {
 
  $("#custom-position-switcher").prop("checked", settings.is_widget_custom_position === 1);
  if (settings.is_widget_custom_position === 1) {
    $(".custom-position-controls").removeClass("hide");
    $(".widget-position").addClass("hide");
  } else {
    console.log("settings3"+settings.is_widget_custom_position);
    $(".custom-position-controls").addClass("hide");
    $(".widget-position").removeClass("hide");
  }
}, 1000);

// end size position




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

  // Set custom position fields
  const customPositionXField = document.getElementById("custom_position_x_value");

  const xDirectionSelect = $(".custom-position-controls select")[0];
    
if (customPositionXField && xDirectionSelect) {
  if (settings.widget_position_right > 0) {
    customPositionXField.value = settings.widget_position_right;
    xDirectionSelect.value = "cust-pos-to-the-right";
  } else if (settings.widget_position_left > 0) {
    customPositionXField.value = settings.widget_position_left;
    xDirectionSelect.value = "cust-pos-to-the-left";
  } else {
    customPositionXField.value = 0;
    xDirectionSelect.value = "cust-pos-to-the-right"; // Default direction
  }
}


const customPositionYField = document.getElementById("custom_position_y_value");

const yDirectionSelect = $(".custom-position-controls select")[1];
if (customPositionYField && yDirectionSelect) {
  if (settings.widget_position_bottom > 0) {
    customPositionYField.value = settings.widget_position_bottom;
    yDirectionSelect.value = "cust-pos-to-the-lower";
  } else if (settings.widget_position_top > 0) {
    customPositionYField.value = settings.widget_position_top;
    yDirectionSelect.value = "cust-pos-to-the-upper";
  } else {
    customPositionYField.value = 0;
    yDirectionSelect.value = "cust-pos-to-the-lower"; // Default direction
  }
}

}


// Fetch settings when the page loads
window.onload = function () {
  fetchSettings();
  domain_name = domain;
 
      website_name = btoa(domain_name);
    
      fetchApiResponse(domain_name);
   

};

   

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
    document.getElementById("widget_icon_size_custom").addEventListener("input", function () {
      var ico_size_value = document.getElementById("widget_icon_size_custom").value;
      if (ico_size_value >= 20 && ico_size_value <= 150) {
        custSizePreview.setAttribute("width", ico_size_value);
        custSizePreview.setAttribute("height", ico_size_value);
        custSizePreviewLabel.innerHTML = ico_size_value;
      }
    //   if (ico_size_value < 20) {
    //     custSizePreview.setAttribute("width", 20);
    //     custSizePreview.setAttribute("height", 20);
    //     custSizePreviewLabel.innerHTML = 20;
    //   }
    //   if (ico_size_value > 150) {
    //     custSizePreview.setAttribute("width", 150);
    //     custSizePreview.setAttribute("height", 150);
    //     custSizePreviewLabel.innerHTML = 150;
    //   }
  });




// <!-- API -->
                              


    
      $('input[name="position"]').change(function () {
        var icon_position = document.querySelector('input[name="position"]:checked').value;
      });

      $('input[name="aioa_icon_type"]').change(function () {
        var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;
      });
      $('input[name="aioa_icon_size"]').change(function () {
        var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;
      });

      
      var colorcode = $("#colorcode").val();
      if (colorcode == "") {
        colorcode = "420083";
      }
      var icon_position = document.querySelector('input[name="position"]:checked').value;
      var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;
      var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;
      
     



    $('#license_key,#colorcode').change(function () {
      var license_key = $("#license_key").val();
      var colorcode = $("#colorcode").val();
      //var checkedValue = $('.messageCheckbox:checked').val();
    })
    $('input[name="position"]').change(function () {
      var icon_position = document.querySelector('input[name="position"]:checked').value;
    });
    // $('input[name="website"]').change(function () {
    //   var website_dropdown = document.querySelector('input[name="website"]:selected').value;

    // });


    $('input[name="aioa_icon_type"]').change(function () {
      var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;
      
    });
    $('input[name="aioa_icon_size"]').change(function () {
      var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;
      
    });
    
   

    

// Set the initial server name and display it
        window.onload = function () {
          var server_name = domain
        };

        // Function to update the server name on dropdown change
       






// Declare variables in the global scope so they can be accessed throughout
let is_widget_custom_position = 0;
let is_widget_custom_size = 0;

function populatecustom(settings) {
    console.log(settings.is_widget_custom_size);

    // Fetch the settings value for custom position and set the checkbox state
    is_widget_custom_position = settings.is_widget_custom_position !== undefined ? settings.is_widget_custom_position : 0;
    $("#custom-position-switcher").prop("checked", is_widget_custom_position === 1);
    console.log("Initial Custom Position Switcher:", is_widget_custom_position);

    // Fetch the settings value for custom size and set the checkbox state
    is_widget_custom_size = settings.is_widget_custom_size !== undefined ? settings.is_widget_custom_size : 0;
    $("#custom-size-switcher").prop("checked", is_widget_custom_size === 1);
    console.log("Initial Custom Size Switcher:", is_widget_custom_size);

    // Handle click event for custom position switcher
    $("#custom-position-switcher").click(function () {
        // Set value based on checkbox state
        is_widget_custom_position = $(this).is(":checked") ? 1 : 0;
        console.log("Custom Position Switcher:", is_widget_custom_position);
    });

    // Handle click event for custom size switcher
    $("#custom-size-switcher").click(function () {
        // Set value based on checkbox state
        is_widget_custom_size = $(this).is(":checked") ? 1 : 0;
        console.log("Custom Size Switcher:", is_widget_custom_size);
    });
}





// Log current value for debugging purposes

document.getElementById("Form_EditForm").onsubmit = function (event) {

  console.log("position"+is_widget_custom_position);
  event.preventDefault();

  // Hide the form
  this.style.display = 'none';

  // Create and style a loader overlay directly
  let loaderOverlay = document.createElement('div');
  loaderOverlay.style.position = 'fixed';
  loaderOverlay.style.top = '0';
  loaderOverlay.style.left = '0';
  loaderOverlay.style.width = '100%';
  loaderOverlay.style.height = '100%';
  loaderOverlay.style.background = 'rgba(0, 0, 0, 0.5)';
  loaderOverlay.style.display = 'flex';
  loaderOverlay.style.justifyContent = 'center';
  loaderOverlay.style.alignItems = 'center';
  loaderOverlay.style.zIndex = '9999';

  let loader = document.createElement('div');
  loader.style.border = '16px solid #f3f3f3';
  loader.style.borderTop = '16px solid #3498db';
  loader.style.borderRadius = '50%';
  loader.style.width = '120px';
  loader.style.height = '120px';
  loader.style.animation = 'spin 1s linear infinite';

  loaderOverlay.appendChild(loader);
  document.body.appendChild(loaderOverlay);

  // CSS for the spinning animation
  let style = document.createElement('style');
  style.innerHTML = `
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
  `;
  document.head.appendChild(style);

  // Create FormData object from the form
  let formData = new FormData(this);

  // Send an AJAX request to submit the form data
  fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
              return response.json();
          } else {
              return response.text();
          }
      })
      .then(data => {
          if (typeof data === 'object') {
              if (data.success) {
                  setTimeout(() => {
                      window.location.replace(window.location.href);
                  }, 3000);
              } else {
                  alert('Form submission failed: ' + data.message);
                  document.getElementById("Form_EditForm").style.display = 'block';
                  document.body.removeChild(loaderOverlay);
              }
          } else {
              setTimeout(() => {
                  window.location.replace(window.location.href);
              }, 2000);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById("Form_EditForm").style.display = 'block';
          document.body.removeChild(loaderOverlay);
      });

  setTimeout(() => {
      if (document.body.contains(loaderOverlay)) {
          document.body.removeChild(loaderOverlay);
      }
  }, 10000);

  // Update widget settings
  var server_name = domain;

  var colorcode = $("#colorcode").val();
  var icon_position = document.querySelector('input[name="position"]:checked').value;
  var icon_type = document.querySelector('input[name="aioa_icon_type"]:checked').value;
  var icon_size = document.querySelector('input[name="aioa_icon_size"]:checked').value;
  var widget_size = document.querySelector('input[name="widget_size"]:checked').value;
  var widget_icon_size_custom = $("#widget_icon_size_custom").val();
  
  const custom_position_x = $("#custom_position_x_value").val() || 0;
  const custom_position_y = $("#custom_position_y_value").val() || 0;
  const x_position_direction = $(".custom-position-controls select").eq(0).val();
  const y_position_direction = $(".custom-position-controls select").eq(1).val();
  
  let widget_position_right = null;
  let widget_position_left = null;
  let widget_position_top = null;
  let widget_position_bottom = null;
  
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

  var params = new URLSearchParams({
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
  }).toString();
  /* Update Widget Settings on ADA dashboard */
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://ada.skynettechnologies.us/api/widget-setting-update-platform', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  xhr.onload = function () {
      if (xhr.status === 200) {
          alert('Settings updated successfully!');
          location.reload();
      } else {
          console.error('Error: ', xhr.status, xhr.statusText);
          alert('Error: Unable to update settings.');
      }
  };
  
  xhr.onerror = function () {
      alert('Request failed. Please check your network connection.');
      console.error('Request error:', xhr);
  };
  
  xhr.send(params);
  
};



