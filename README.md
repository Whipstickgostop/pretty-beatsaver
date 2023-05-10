# pretty-beatsaver
Better colors for BeatSaver :)

Brought to you by CBG.

## CDN
CSS available at `https://cdn.wsgs.tv/beatsaver.css`

## TamperMonkey
Create a script in TamperMonkey with the following contents of `script.js`, e.g.

```js
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
```