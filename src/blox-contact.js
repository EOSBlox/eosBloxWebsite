import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '@polymer/app-route/app-location.js';
import './components/blox-header.js';
import './components/blox-footer.js';
import './components/blox-spacer.js';
import './shared-styles.js';


class BloxContact extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .component-container{
          display: flex;
          flex-wrap: wrap;
        }
        .component{
          width: 270px;
          padding: 20px 20px 20px 20px;
          margin: 20px 20px 0 0;
        }
        .description, .email {
          font-size: 14px;
        }
      </style>

      <div class="container green-bg">
        <div class="innerContainer">
          <blox-header theme="light"></blox-header>
          <h2 class="white-txt">Contact Us<small>We don't bite.<small></h2>
          <blox-spacer space="90"></blox-spacer>
        </div>
      </div>
      <div class="container white-bg">
        <div class="innerContainer">
          <blox-spacer space="90"></blox-spacer>
          <h4>Get In Touch</h4>
          <div class="component-container">

            <div class="component">
              <div class="title">Press & Ediorial</div>
              <p class="description">If you are a journalist and want to write about or interview EOS Blox</p>
              <p class="email"><a href="mailto:press@eosblox.com">press@eosblox.com</a></p>
            </div>

            <div class="component">
              <div class="title">Business Inquiries</div>
              <p class="description">If you are managing a business and want to partner with EOS Blox</p>
              <p class="email"><a href="mailto:biz@eosblox.com">biz@eosblox.com</a></p>
            </div>

            <div class="component">
              <div class="title">General Inquiries</div>
              <p class="description">For general questions about EOS Blox drop us a line</p>
              <p class="email"><a href="mailto:hello@eosblox.com">hello@eosblox.com</a></p>
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
    this.dispatchEvent(new CustomEvent('sideMenu', {bubbles: true, composed: true}));
  }

} window.customElements.define('blox-contact', BloxContact);
