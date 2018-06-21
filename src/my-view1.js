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
          justify-content: center;
          max-width:850px;
          margin: 0px auto;
        }
        .jumbo-container img{
          max-width:600;
          height: auto;
          width: auto;
          margin:25px 15px 25px 25px;
        }

        .jumbo-container .title{
          font-size:45px;
          font-weight:800;
          color: #FFF;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }
        .jumbo-container .subtitle{
          font-size:25px;
          font-weight:300;
          color: #FFF;
        }


        .container {
          max-width:1100px;
          margin: 0 auto;
          padding:22px;
        }
        .container .title {
          font-size:55px;
          font-weight:700;
          width:100%;
          padding-top:60px;
        }
        .container .header {
          font-size:26px;
          font-weight:700;
          width:100%;
        }
        .container .content {
          padding:40px 0 60px 0;
        }
        .btn-critical{
          max-width: 300px;
          text-align: center;
          line-height:70px;
        }

        .flex-wrap{
          display: flex;
          flex-wrap: wrap;
        }
        .flex-wrap div{
          padding:20px;
          min-width:300px;
        }

      </style>
      <iron-media-query query="(min-width: 600px)" query-matches="{{desktop}}"></iron-media-query>

      <div class="jumbo">
      <div class="jumbo-container">
        <img src="../images/block-white.svg">
        <div class="title">A suite of web components.
        </div>
        </div>
      </div> 



      <div class="container">
        <div class="title">About EOS Blox.</div> 
        <div class="header">EOS Blox makes the worlds first suite of web components specifically for the creative developement of EOS DApps. </br>
          </div> 
        <div class="content">Web components significantly accelerate development times and shortern the learning curve. 
        We lovingly craft each reusable components to form the building blocks of your next EOS DApp.  
        EOS Blox allow you to keep all the style and expression that makes your dapp unique to you, yet provide you with common components that you can re-use. Web components run nativly in the browser </br></br></br>

<div class="flex-wrap">
  <div>
    <b>We are curently working on...</b>
    <ul>
      <li>Secure Account Creation</li>
      <li>Identity Management</li>
      <li>Create Backup Keyfiles & Restore</li>
      <li>Print Paper Wallets for each identity</li>
    </ul>
  </div>
  <div>
    <b>Next up we are focusing on transfers...</b>
    <ul>
      <li>Get Ballance for an Identity</li>
      <li>Transfer EOS Tokens</li>
      <li>Muti Signature Transfers</li>
      <li>Escrow Transfers</li>
    </ul>
  </div>
</div>







          </br></br>

          <div class="btn-critical">Show me a Webcomponent</div>
        </div> 
      </div>
    `;
  }
  static get properties() {
    return {
      desktop: {
        type: Boolean,
      }
    };
  }

} window.customElements.define('my-view1', MyView1);
