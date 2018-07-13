define(["./blox-app.js"],function(_bloxApp){"use strict";class BloxAbout extends _bloxApp.PolymerElement{static get template(){return _bloxApp.html`
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
          <h3>EOS Blox is the world’s first suite of web components specifically designed for the creative development of EOS DApps</h3>
          <p>Web components are like building blocks. You make a few components that perform a single task and then join them together into a single new component. This approach significantly accelerates development time, shortens the learning curve, and reduces code duplication, all of which leads to happier developers! </p>
          <p>We lovingly craft each reusable components to form the building blocks of your next EOS DApp. EOS Blox allow you to keep the style and expression that makes your DApp unique to you, yet provide you with common components that you can re-use. Web components run natively in the browser. </p>
          <a href="/portfolio"><button class="green-bg">show me the components</button></a>
          <blox-spacer space="90"></blox-spacer>
        </div>
      </div>

      <div class="container darkBlue-bg">
        <div class="innerContainer">
          <blox-footer></blox-footer>
        </div>
      </div>

    `}_openMenu(){this.dispatchEvent(new CustomEvent("sideMenu",{bubbles:!0,composed:!0}))}}window.customElements.define("blox-about",BloxAbout)});