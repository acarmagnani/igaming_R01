function trackWhatsAppClick(buttonId) {
    gtag('event', 'click', {
        'event_category': 'WhatsApp',
        'event_label': buttonId,  // Use the buttonId to distinguish between buttons
        'value': 1
    });
}
