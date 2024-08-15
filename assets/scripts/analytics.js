function trackWhatsAppClick(eventLabel) {
    fbq('track', 'Lead');
    gtag('event', 'Button Click', {
      'event_category': 'WhatsApp Redirect',
      'event_label': eventLabel
    });
}







window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'MEASUREMENT_ID');