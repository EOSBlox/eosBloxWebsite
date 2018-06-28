/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    .container{
      max-width: 1400px;
      margin: 0px auto;
    }
    .innerContainer{
      max-width: 1000px;
      margin: 0px auto;
      padding-left: 40px;
      padding-right: 40px;
    }
    .lightGrey-bg{
      background-color: #E8EAEE;
    }
    .white-bg{
      background-color: #FFFFFF;
    }
    .darkBlue-bg{
      background-color: #2E3038;
    }
    .blue-bg{
      background-color: #3D6D9A;
    }
    .green-bg{
      background-color:#80BA68;
    }
    .darkBlue-txt{
      color: #383D48;
    }
    .white-txt{
      color: #FFFFFF;
    }
    h2 {
      font-weight:400;
      font-size:55px;
      margin:0 auto;
      width:auto;
      text-align:center;
    }
    h3 {
      font-weight:400;
      font-size:28px;
      margin:0 auto;
      width:auto;
      padding: 85px 0 50px 0;
      color: #373D47;
    }
    h4 {
      margin-bottom: 0px;
    }
    small {
      width: 100%;
      font-weight:400;
      font-size:21px;
      display: block;
    }
    p {
      font-size: 18px;
      line-height: 26px;
      color: #74787e;
      font-weight: 400;
      margin: 0;
      padding: 9px 0 18px 0;
    }
    button {
      border: none;
      border-radius:4px;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      font-weight:900;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      margin-top:60px;
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
