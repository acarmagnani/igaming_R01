function button_click(event_label, event_label, button_name, button_location, redirect_url) {
    gtag('event', 'Button Click', {
        'event_category': event_category,
        'event_label': event_label,
        'button_name': button_name,
        'button_location': button_location,
        'redirect_url': redirect_url
    });
}