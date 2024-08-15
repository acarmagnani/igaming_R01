function button_click(eventCategory, eventLabel, buttonName, buttonLocation, destinationLabel) {
    gtag('event', 'Button Click', {
        'event_category': eventCategory,
        'event_label': eventLabel,
        'button_name': buttonName,
        'button_location': buttonLocation,
        'destination': destinationLabel,
    });
}