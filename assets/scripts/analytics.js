function trackWhatsAppClick(eventLabel) {
    gtag('event', 'Whatsapp Click', {
      'event_category': 'WhatsApp Redirect',
      'event_label': eventLabel
    });
}