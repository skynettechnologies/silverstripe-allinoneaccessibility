const SESSION_KEY = "visitor_data";

      /* -------------------------------------------
         GET VISITOR DATA (SESSION LIKE PHP)
      ----------------------------------------------*/
      function getVisitorData() {
        const storedData = sessionStorage.getItem(SESSION_KEY);

        if (storedData) {
          console.log("[AIOA] Visitor data fetched from SESSION");
          return Promise.resolve(JSON.parse(storedData));
        }

        console.log("[AIOA] Visitor data NOT found in session. Calling ipapi.");

        return fetch("https://ipapi.co/json/")
          .then(res => res.json())
          .then(data => {
            const visitorData = {
              country_code: data.country_code || "Unknown",
              in_eu: data.in_eu || false
            };

            sessionStorage.setItem(SESSION_KEY, JSON.stringify(visitorData));
            return visitorData;
          })
          .catch(err => {
            console.error("[AIOA] ipapi error:", err);

            const fallbackData = {
              country_code: "Unknown",
              in_eu: false
            };

            sessionStorage.setItem(SESSION_KEY, JSON.stringify(fallbackData));
            return fallbackData;
          });
      }

      /* -------------------------------------------
         MAIN LOGIC
      ----------------------------------------------*/
      getVisitorData().then(visitorData => {

        const countryCode = visitorData.country_code || "Unknown";
        const inEU = visitorData.in_eu || false;

        // Same as PHP logic
        const is_eu = inEU ? 0 : 1;

        console.log("[AIOA] Country:", countryCode);
        console.log("[AIOA] in_eu:", inEU);
        console.log("[AIOA] is_eu:", is_eu);

        /* -------------------------------------------
           LOAD SCRIPT BASED ON EU STATUS
        ----------------------------------------------*/
        setTimeout(function () {

          if (document.getElementById("aioa-adawidget")) {
            return;
          }

          const scriptEle = document.createElement("script");
          scriptEle.id = "aioa-adawidget";
          scriptEle.async = true;

          if (inEU) {
            // EU SCRIPT
            scriptEle.src =
              "https://eu.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js" +
              "?colorcode=%23420083" +
              "&token=" +
              "&position=bottom_right";
          } else {
            // NON-EU SCRIPT
            const licensekey = "YOUR_LICENSE_KEY"; // replace
            const color = "#420083";
            const position = "bottom_right";
            const icon_type = "aioa-icon-type-1";
            const icon_size = "aioa-medium-icon";

            scriptEle.src =
              "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js" +
              "?colorcode=%23420083" +
              "&token=" +
              "&position=bottom_right";
          }

          document.body.appendChild(scriptEle);

        }, 3000); // Same delay behavior

      });
