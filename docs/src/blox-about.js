import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/paper-input/paper-input.js";
import "../node_modules/@polymer/app-route/app-location.js";
import './components/blox-header.js';
import './components/blox-footer.js';
import './components/blox-spacer.js';
import './shared-styles.js';

class BloxAbout extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <div class="container lightGrey-bg">
        <div class="innerContainer">
          <blox-header theme="dark"></blox-header>
          <h2 class="darkBlue-txt">A Suite of Web Components<small>Ready for your next EOS DApp<small></h2>
          <blox-spacer space="90"></blox-spacer>
        </div>
      </div>

      <div class="container white-bg">
        <div class="innerContainer">
          <h3>EOS Blox is the worlds first suite of web components specifically for the creative developement of EOS DApps.</h3>
          <p>Web components are like building blocks, you make a few components that perform a single task and then join them together into a single new component, this approach significantly accelerate development times, shorterns the learning curve and stops duplicate code from being writen, of which the side effect is happy developers! </p>
          <p>We lovingly craft each reusable components to form the building blocks of your next EOS DApp. EOS Blox allow you to keep all the style and expression that makes your dapp unique to you, yet provide you with common components that you can re-use. Web components run nativly in the browser </p>
          <button class="green-bg">show me a web component</button>
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

window.customElements.define('blox-about', BloxAbout);