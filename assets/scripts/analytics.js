function trackWhatsAppClick(eventLabel) {
    gtag('event', 'Button Click', {
      'event_category': 'WhatsApp Redirect',
      'event_label': eventLabel
    });
    return true;
  }

  function trackFacebookPixel() {
    fbq('track', 'Lead');
    return true;
  }