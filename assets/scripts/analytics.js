function trackButtonClick(buttonName) {
    gtag('event', 'button_click', {
        'button_name': buttonName
    });
}

(function(){
    "use strict";
    /* global ga */
    
    var demo = true;
    
    var trackingLinks = document.getElementsByClassName('js-analytics-track'), i;
  
    function trackOnClick(event) {
      var config = {
            category: this.dataset.cat || 'PDF',
            action: this.dataset.action || 'Download',
            file: this.getAttribute('href')
          };
      
      // Just delete this block in production environment
      if(demo === true) {
        event.preventDefault();
        
        var result = document.getElementById('m-result');
        
        result.innerHTML = [
          'Google Analytics will track an event in the category',
          config.category,
          'action',
          config.action,
          'for the file',
          config.file,
          '.'
        ].join(' ');
      }
      
      if(typeof ga !== 'undefined') {
        ga('send', 'event', category, action, file);
      }
    }
  
    for(i = 0; i < trackingLinks.length; i++) {
      trackingLinks[i].addEventListener('click', trackOnClick);
    }
})();