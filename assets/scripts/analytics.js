function button_click(eventName, eventCategory, buttonName, buttonLocation, destinationLabel) {
    gtag('event', eventName, {
        'event_category': eventCategory,
        'button_name': buttonName,
        'button_location': buttonLocation,
        'destination': destinationLabel,
    });
}