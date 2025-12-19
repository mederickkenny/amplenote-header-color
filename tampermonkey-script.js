// ==UserScript==
// @name         Change Header Color
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Pastel colored headers
// @author       You
// @match        https://www.amplenote.com/notes/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amplenote.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle(`
        h1.heading a[name] {
            color: #bf616a !important; /* Salmon */
        }

        h2.heading a[name] {
            color: #ebcb8b !important; /* Goldenrod */
        }

        h3.heading a[name] {
            color: #a3be8c !important; /* Olive green */
        }
    `);
})(); 