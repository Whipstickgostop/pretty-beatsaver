// ==UserScript==
// @name         Pretty BeatSaver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Better dark colors for BeatSaver
// @author       Whipstickgostop
// @downloadURL  https://github.com/Whipstickgostop/pretty-beatsaver/raw/main/script.js
// @updateURL    https://github.com/Whipstickgostop/pretty-beatsaver/raw/main/script.js
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
