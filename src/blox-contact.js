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
