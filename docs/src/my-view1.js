import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
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
        .code{
          border:1px solid black;
          border-radius: 5px;
          background-color:#000;
          padding:16px;
          font-size:18px;
          color: white;
          font-family: "Lucida Console", Monaco, monospace;
          line-height: 20px;
        }
        .code .red {
          color: #FF5D6B
        }
        .code .blue {
          color: #00A0CA
        }

      </style>
      <div class="jumbo">
      <div class="jumbo-container">
        <img src="../images/block-white.svg">
        <div class="title">A suite of web components.
        </div>
        </div>
      </div> 
      <div class="container">
        <h1 class="title">About EOS Blox.</h1> 
        <h2 class="header">EOS Blox is the worlds first suite of web components specifically for the creative developement of EOS DApps. </h2> 
        <div class="content">
        
        Web components are like building blocks, you make a few components that perform a single task and then join them together into a new component, significantly accelerate development times and shortern the learning curve. 
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
        <template is="dom-if" if="{{!demo}}">
        <div class="btn-critical" on-click="_showDemo">Show me a Webcomponent</div>
          </template>
        
          <template is="dom-if" if="{{demo}}">
            <h3>&lt;blox-mnemonic> Demo</h3>
            <p>We are going to generate a Mnemonic recovery phrase which is a series of 12 words, and conforms to the BIP39 specification. Mnemonic's are often used as password backups for wallets.</p>
            <p>Each webcomponet looks and behaves just like all other HTML tags you know and love.</p>
            <div class="code">
              &lt;blox-mnemonic>&lt;/blox-mnemonic></br>
            </div>
            <p>Below we can see the property 'password' and 'result' has been added.</p>
            <div class="code">
              &lt;blox-mnemonic password="{<span class="red">password</span>}" result="{<span class="blue">result</span>}">&lt;/blox-mnemonic></br>
            </div>
            <p>Note that we can pass values around with curly brackets, we have linked up 'password' from the input to blox-mnemonic, and result is linked to a paragraph tag. This is just one way we can pass in values and get data back.</p>
            <div class="code">
              &lt;blox-mnemonic password="{<span class="red">password</span>}" result="{<span class="blue">result</span>}">&lt;/blox-mnemonic></br>
              Password: &lt;paper-input value="{<span class="red">password</span>}"></br>
              Mnemonic: &lt;p>{<span class="blue">result</span>}&lt;/p></br>
            </div>
            <p> blox-mnemonic will only accept a password of 8 charectors or more, as the user types the input is fed in to the blox-mnemonic component, the result will start to flow out and into the paragraph, this all happens in real-time</p>
            <p> Thats it, just 3 lines of HTML. Let's see it rendered to the DOM below.</p>

          </template>
        </div> 
      </div>
    `;
  }

  static get properties() {
    return {
      demo: {
        type: Boolean,
        value: false
      }
    };
  }

  _showDemo() {
    this.demo = true;
  }

}

window.customElements.define('my-view1', MyView1);