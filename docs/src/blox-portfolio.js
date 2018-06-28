define(["./blox-app.js"],function(_bloxApp){"use strict";class bloxPortfolio extends _bloxApp.PolymerElement{static get template(){return _bloxApp.html`
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
        <p>Provide a single component that be can reused to create many combined blox or used individually</p>
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
              <div class="title">Blox-Geohash</div>
              <p class="description">Creates a geohash from a users location</p>
            </div>

            <div class="component">
              <div class="title">Blox-Avatar</div>
              <p class="description">Upload, resize and rotate an avatar</p>
            </div>

            <div class="component">
              <div class="title">Blox-Sign</div>
              <p class="description">Signs any data given a private key</p>
            </div>

            <div class="component">
              <div class="title">Blox-Keypair</div>
              <p class="description">Creates two EOS keypairs</p>
            </div>

          </div>


          <blox-spacer space="90"></blox-spacer>


          <h4>Combined Blox</h4>
          <p>Utilize the Individual blox to create a more complex reusable function</p>
          <div class="component-container">

            <div class="component">
              <div class="title">Blox-Paper</div>
              <div class="version">v1.0.0</div>
              <p class="description">Generates and prints a paper wallet from a private key</p>
              <a href="https://github.com/EOSBlox/blox-paper" target="_blank"><img src="../images/github.svg"></a>
              <a href="https://www.npmjs.com/package/blox-paper" target="_blank"><img src="../images/npm.svg"></a>
            </div>

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

    `}_openMenu(){this.dispatchEvent(new CustomEvent("sideMenu",{bubbles:!0,composed:!0}))}}window.customElements.define("blox-portfolio",bloxPortfolio)});