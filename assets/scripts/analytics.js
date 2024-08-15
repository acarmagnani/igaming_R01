function button_click(eventCategory, eventLabel, buttonName, buttonLocation, redirectUrl) {
    gtag('event', 'Button Click', {
        'event_category': eventCategory,
        'event_label': eventLabel,
        'button_name': buttonName,
        'button_location': buttonLocation,
        'redirect_url': redirectUrl
    });

    // Optionally handle the redirect if needed
    setTimeout(function() {
      window.location.href = redirectUrl;
    }, 300); // Adjust the delay if necessary
  }