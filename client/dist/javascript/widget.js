fetch('https://ada.skynettechnologies.us/api/widget-settings', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        website_url: window.location.hostname
    })
})
.then(response => response.json())
.then(data => {
    const isEu = data?.Data?.no_required_eu ?? 1;

    setTimeout(function () {

        if (document.getElementById("aioa-adawidget")) return;

        const scriptEle = document.createElement("script");
        scriptEle.id = "aioa-adawidget";
        scriptEle.async = true;

        scriptEle.src = (isEu == 0)
            ? "https://eu.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=%23420083&token=&position=bottom_right"
            : "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=%23420083&token=&position=bottom_right";

        document.body.appendChild(scriptEle);

    }, 3000);

})
.catch(error => {
    console.error(error);
});