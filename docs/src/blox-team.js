define(["./blox-app.js"],function(_bloxApp){"use strict";class BloxTeam extends _bloxApp.PolymerElement{static get template(){return _bloxApp.html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <div class="container lightGrey-bg">
        <div class="innerContainer">
          <blox-header theme="dark"></blox-header>
          <h2 class="darkBlue-txt">The Team<small>Small but powerful<small></h2>
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

    `}_openMenu(){this.dispatchEvent(new CustomEvent("sideMenu",{bubbles:!0,composed:!0}))}}window.customElements.define("blox-team",BloxTeam)});