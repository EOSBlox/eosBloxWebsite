/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          border:0; 
          margin:0; 
          
        }
        .jumbo {
          font-size:45px;
          font-weight:700;
          width:100%;
          text-align: center;
          padding:60px 0 40px 0;
          background-color: #DF043C;

        }
        .jumbo-container {
          display: flex;
          flex-wrap: wrap;
          max-width:850px;
          margin: 0px auto;
        }
        .jumbo-container img{
          max-width:600;
          height: auto;
          width: auto;
          margin:25px 0 25px 25px;
        }
        .jumbo-container .wrapper{
          margin:25px;
          text-align: left;
          max-width: 800px;
        }
        .jumbo-container .wrapper .title{
          font-size:45px;
          font-weight:800;
          color: #FFF;
        }
        .jumbo-container .wrapper .subtitle{
          font-size:25px;
          font-weight:300;
          color: #FFF;
        }




        .container {
          max-width:1100px;
          margin: 0px auto;
        }
        .container .title {
          font-size:55px;
          font-weight:700;
          width:100%;
          padding:60px 0 0 0;
          margin:25px;
        }
        .container .header {
          font-size:26px;
          font-weight:700;
          width:100%;
          padding:0 0 20px 0;
          margin:25px;
        }
        .container .content {
          margin:25px;
        }
      </style>

      <div class="jumbo">
      <div class="jumbo-container">
        <img src="../images/block-white.svg">
        <div class="wrapper">
          <div class="title">A suite of web components.</div>

        </div>
        </div>
      </div> 
      <div class="container">
        <div class="title">About EOS Blox.</div> 
        <div class="header">EOS Blox is the worlds first and only suite of EOS web components. </br>
          We lovingly craft reusable components that will form the building blocks of your next EOS DApp.</div> 
        <div class="content">Web components accelerate EOS DApp development while significantly lowetring the skill to entry. 
          Built out of necescity and with love, we want to save other developers the need to rewite the common parts of modern DApp development.
          EOS Blox allow you to keep all the style and expression that makes your dapp unique. </br></br>
          <b>We are curently working on account management...</b>

          <ul>
            <li>Secure Account Creation</li>
            <li>Identity Management</li>
            <li>Create Backup Keyfiles & Restore</li>
            <li>Print Paper Wallets for each identity</li>
            <li>Scatter Integration</li>
            
          </ul>

          <b>Next up we are focusing on transfers...</b>

          <ul>
            <li>Get Ballance for an Identity</li>
            <li>Transfer EOS Tokens</li>
            <li>Muti Signature Transfers</li>
            <li>Escrow Transfers</li>
          </ul>
        </div> 
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);


that 