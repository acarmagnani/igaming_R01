function trackWhatsAppClick(eventLabel) {
    fbq('track', 'Lead');
    gtag('event', 'Button Click', {
      'event_category': 'WhatsApp Redirect',
      'event_label': eventLabel
    });
}