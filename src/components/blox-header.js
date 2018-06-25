import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import '../shared-styles.js';

class BloxHeader extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
        .main {
          display: flex;
        }
        .grow{
          flex:1;
        }
        .logo{
          font-weight:300;
          font-size:24px;
          color: #494E58;
          padding: 25px 0 25px 0;
          min-width: 115px;
          margin:0;
        }
        .logo span{
          font-weight:700;
        }
        .menu{
          font-weight:700;
          font-size:14px;
          color: #494E58;
          padding: 25px 0 25px 0;
          cursor: pointer;
          line-height: 40px;
          width: 65px;
          display: flex;
          flex-wrap: nowrap
        }
        .menu * {
          pointer-events: none;
        }
        .open{
          width:10px;
          height:10px;
          padding-left: 3px;
        }
        a {
          text-decoration: none;
        }
      </style>
      <div class="main">
        <a href="https://www.eosblox.com/"><h1 class="logo">EOS <span>BLOX</span></h1></a>
        <div class="grow"></div>
        <div class="menu" on-click="_openMenu" on-mouseover="_openx" on-mouseout="_closex">
          <div>MENU</div> 
          <div><img src="../images/menu-{{theme}}-{{over}}.svg" class="open"></div>
        </div>
      </div>
    `;
  }
  _openMenu() {
    this.dispatchEvent(new CustomEvent('sideMenu', {bubbles: true, composed: true}));
  }
  static get properties() {
    return {
        theme: {
            type: String,
            observer: "_theme"
        },
        over: {
          type: String,
          value: 'open'
      },
    }
  }

  _closex(event){
    event.preventDefault()
    if(this.over == 'closed'){
      this.over = 'open'
    }
  }

  _openx(event){
    event.preventDefault()
    if(this.over == 'open'){
      this.over = 'closed'
    }
  }

  _theme(){
    if(this.theme == 'light'){
      this.shadowRoot.querySelector('.logo').style.color = 'white';
      this.shadowRoot.querySelector('.menu').style.color = 'white';
    } else {
      this.shadowRoot.querySelector('.logo').style.color = '#494E58';
      this.shadowRoot.querySelector('.menu').style.color = '#494E58';
    }
  }

} window.customElements.define('blox-header', BloxHeader);
