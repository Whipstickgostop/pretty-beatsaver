# pretty-beatsaver
Better colors for BeatSaver :)

![preview](preview.png)

Brought to you by CBG

## CDN
Updated CSS available at `https://cdn.wsgs.tv/beatsaver.css`

It can be imported into any user CSS browser extension for automatic updates.

```css
@import('https://cdn.wsgs.tv/beatsaver.css');
```

## TamperMonkey
If you already have TamperMonkey or a similar extension installed, you can install the UserScript from `script.js`

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