// ==UserScript==
// @name         Pretty BeatSaver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Better colors for BeatSaver
// @author       Whipstickgostop
// @match        https://beatsaver.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  GM_addStyle(`
    @import url('https://cdn.wsgs.tv/beatsaver.css');
  `);
})();
