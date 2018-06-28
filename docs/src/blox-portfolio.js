import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import './components/blox-header.js';
import './components/blox-footer.js';
import './components/blox-spacer.js';
import './shared-styles.js';

class bloxPortfolio extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .component{
          background-color: white;
          border: 1px solid #E9ECEF;
          border-radius: 4px;
          width: 270px;
          padding: 20px 20px 10px 20px;
          margin: 10px;
        }
        .component-container{
          display: flex;
          flex-wrap: wrap;
        }
        .component img {
          width: 25px;
          height: 25px;
          opacity: 0.4;
          padding-right: 4px;
        }
        .version{
          font-size:12px;
        }
      </style>

      <div class="container blue-bg">
        <div class="innerContainer">
          <blox-header theme="light"></blox-header>
          <h2 class="white-txt">Our Portfolio<small>Ready for your next DApp<small></h2>
          <blox-spacer space="90"></blox-spacer>
        </div>
      </div>
      <div class="container white-bg">
        <div class="innerContainer">
        <blox-spacer space="90"></blox-spacer>
        <h4>Individual Blox</h4>
        <p>Provide a single function that be can reused to create many combined blox</p>
          <div class="component-container">


            <div class="component">
              <div class="title">Blox-Random</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates a random string or number of a specified length</p>
              <a href="https://github.com/EOSBlox/blox-random" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-random" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-Scrypt</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates a hash using the Scrypt KDF </p>
              <a href="https://github.com/EOSBlox/blox-scrypt" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-scrypt" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-Mnemonic</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates a random or from password 12 word phrase</p>
              <a href="https://github.com/EOSBlox/blox-mnemonic" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-mnemonic" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-Secure</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates a secure AES based encrypted object</p>
              <a href="https://github.com/EOSBlox/blox-secure" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-secure" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-QRCode</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates a QR Code from a given string</p>
              <a href="https://github.com/EOSBlox/blox-qrcode" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-qrcode" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-Backup</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates a back up file that is downloaded by the user</p>
              <a href="https://github.com/EOSBlox/blox-backup" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-backup" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-Restore</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates a file upload for the user to restore an acocunt</p>
              <a href="https://github.com/EOSBlox/blox-restore" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-restore" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-Print</div>
              <div class="version">v1.0.0</div>
              <p class="description">Opens a popup window and prints the given HTML</p>
              <a href="https://github.com/EOSBlox/blox-print" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-print" target="_blank"><img src="../images/npm.svg"></a>
            </div>

            <div class="component">
              <div class="title">Blox-Paper</div>
              <p class="description">Generates a Paper Wallet from a private key</p>
            </div>


          </div>


          <blox-spacer space="90"></blox-spacer>


          <h4>Combined Blox</h4>
          <p>Utilize the Individual blox to create a more complex reusable function</p>
          <div class="component-container">

            <div class="component">
              <div class="title">Blox-Account</div>
              <p class="description">Generates a a user account capable of many identities</p>
            </div>

            <div class="component">
              <div class="title">Blox-Identity</div>
              <p class="description">Generates an identity within an account</p>
            </div>

          </div>


          <blox-spacer space="90"></blox-spacer>
        </div>
      </div>
      <div class="container darkBlue-bg">
        <div class="innerContainer">
        <blox-footer></blox-footer>
        </div>
      </div>

    `;
  }

  _openMenu() {
    this.dispatchEvent(new CustomEvent('sideMenu', {
      bubbles: true,
      composed: true
    }));
  }

}

window.customElements.define('blox-portfolio', bloxPortfolio);