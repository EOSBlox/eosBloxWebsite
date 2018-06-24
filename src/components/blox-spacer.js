import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class BloxSpacer extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
        .spacer {
            display: block;
            width: 100%;
        }
      </style>

      <div class="spacer" style="height: {{space}}px;"></div>
    `;
  }

  static get properties() {
    return {
        space: {
            type: String,
            value: '100',
        },
    }
  }

} window.customElements.define('blox-spacer', BloxSpacer);
