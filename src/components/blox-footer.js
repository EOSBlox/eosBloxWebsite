import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class BloxFooter extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
        .main{
          display: flex;
          flex-wrap: wrap;
          padding-top:50px;
          padding-bottom:50px;
        }
        .one-third{
          flex:1;
          min-width:300px;
        }
        .two-thirds{
          flex:2;
          min-width:300px;
        }
        .logo-container{
          display: flex;
          flex-wrap: nowrap;
        }
        .text{
          color: #8F99A6;
          font-weight:300;
          font-size:24px;
        }
        .text span{
          font-weight:700;
        }
        .icon{
          padding-top:4px;
          padding-right:6px;
        }
        .icon img {
          width:24px;

        }
        ul{
          list-style: none;
          margin:0;
          padding: 0;
        }
        li {
          display: inline;
          margin-right:20px;
        }
        a {
          text-decoration: none;
          color: #8F99A6;
          font-weight:400;
          font-size:13px;
        }
      </style>

     <div class="main">
        <div class="one-third">
          <div class="logo-container">
            <div class="icon"><img src="../images/block-white.svg"></div>
            <div class="text">EOS <span>BLOX</span></div>
          </div>
        </div>
        <div class="two-thirds">
          <ul>
            <li><a href="https://t.me/joinchat/F6JO5hCAfj3LBdDCkwcPCw" target="_blank">Telegram</a></li>
            <li><a href="mailto:hello@eosblox.com">hello@eosblox.com</a></li>
          </ul>
        </div>
      </div>
    `;
  }


} window.customElements.define('blox-footer', BloxFooter);
