/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import "../node_modules/@polymer/polymer/polymer-element.js";
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      .btn-critical {
        display: block;
        width: 100%;
        font-weight: bold;
        padding: 0 12px;
        line-height: 36px;
        font-size: 14px;
        border: 1px solid;
        border-radius: 3px;
        color: #5A616F;
        text-shadow: 0 1px 0 #FFF;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        border-color: #d1d3d6 #d2d3d5 #bdbec0;
        background: #F4F4F5;
        background: -webkit-linear-gradient(top,#FFF,#F6F7F8);
        background: -ms-linear-gradient(top,#FFFFFF,#f9f9f9);
        background: -moz-linear-gradient(top,#FFFFFF,#f9f9f9);
        background: -o-linear-gradient(top,#FFFFFF,#f9f9f9);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',endColorstr='#f9f9f9');
        cursor: pointer;
      }
  
      .btn-critical:hover {
        text-decoration: none;
        border-color: #CCCED2 #C7C8C9 #B6B7B9;
        background: rgb(255,255,255);
        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(249,250,250,1) 100%);
        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(249,250,250,1) 100%);
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(249,250,250,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', 
        endColorstr='#f9fafa',GradientType=0 );
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);