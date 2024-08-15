function trackButtonClick(buttonName) {
    gtag('event', 'button_click', {
        'button_name': buttonName
    });
}