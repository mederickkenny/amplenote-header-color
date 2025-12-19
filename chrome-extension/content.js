(function() {
    'use strict';
    
    function addGlobalStyle(css) {
        var head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    
    addGlobalStyle(`
        h1.heading a[name] {
            color: #bf616a !important;
        }
        h2.heading a[name] {
            color: #ebcb8b !important;
        }
        h3.heading a[name] {
            color: #a3be8c !important;
        }
    `);
})();