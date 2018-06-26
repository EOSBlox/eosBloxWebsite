import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

setPassiveTouchGestures(true);
setRootPath(BloxAppGlobals.rootPath);

class BloxApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #3D6D9A;
          --app-secondary-color: #E8EAEE;
          display: block;
        }
        .pages{
          position: relative;
          left: 0px;
          transition: 0.5s;
        }
        .sideMenu{
          color: #616264;
          height: 100%; 
          width: 0; 
          position: fixed; 
          z-index: 1; 
          top: 0; 
          right: 0;
          background-color: #27282D; 
          overflow-x: hidden; 
          padding-top: 60px;
          transition: 0.3s;
          transition-timing-function: easeOutQuint;
        }
        .side-menu {
          margin: 0 20px;
          min-width: 280px;
          overflow:hidden;
          display: block;
        }
        .side-menu a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: #616264;
          line-height: 40px;
        }
        .side-menu a.iron-selected {
          color: #C4C6CE;
          font-weight: bold;
        }
        .bold {
          font-weight:700;
        }

      </style>
      <iron-media-query query="(min-width: 600px)" query-matches="{{desktop}}"></iron-media-query>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main" class="pages">
        <blox-about name="about"></blox-about>
        <blox-portfolio name="portfolio"></blox-portfolio>
        <blox-team name="team"></blox-team>
        <blox-contact name="contact"></blox-contact>
        <my-view404 name="view404"></my-view404>
      </iron-pages>

      <div class="sideMenu">
        <iron-selector selected="[[page]]" attr-for-selected="name" class="side-menu" role="navigation">
            <a name="about" href="[[rootPath]]about" on-click="_sideMenuClose">What is EOS Blox</a>
            <a name="portfolio" href="[[rootPath]]portfolio" on-click="_sideMenuClose">Our Web Components</a>
            <a name="team" href="[[rootPath]]team" on-click="_sideMenuClose">Meet The Team</a>
            <a name="contact" href="[[rootPath]]contact" on-click="_sideMenuClose">Get In Touch</a>
          </iron-selector>
      </div>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      sideMenu: {
        type: Boolean,
        value: false,
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  constructor() {
    super();
    window.addEventListener('sideMenu', () => this._sideMenuOpen());
  }

  
  _sideMenuOpen(){ 
    if(this.sideMenu == true){
      this._sideMenuClose();
    } else {
      this.sideMenu = true;
      let pageMove='';   
      let menuMove=''; 
  
      if (window.innerWidth <= 1400){
        pageMove = 280
        menuMove = 280
      }
      if (window.innerWidth > 1400){
        let space = (window.innerWidth - 1400)/2
        pageMove = 280 
        menuMove = 280 + space
      }
      this.shadowRoot.querySelector('.pages').style.left = -Math.abs(pageMove)+'px';
      this.shadowRoot.querySelector('.sideMenu').style.width = Math.abs(menuMove)+'px';
    }
  }
  _sideMenuClose(){
    if(this.sideMenu == true){
      this.sideMenu = false;
      this.shadowRoot.querySelector('.pages').style.left = "0"
      this.shadowRoot.querySelector('.sideMenu').style.width = "0";
    }
  }
  _routePageChanged(page) {
    if (!page) {
      this.page = 'about';
    } else if (['about', 'portfolio', 'team', 'contact'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }
  _pageChanged(page) {
    switch (page) {
      case 'about':
        import('./blox-about.js');
        break;
      case 'portfolio':
        import('./blox-portfolio');
        break;
      case 'team':
        import('./blox-team.js');
        break;
      case 'contact':
        import('./blox-contact.js');
        break;
    }
  }
} window.customElements.define('blox-app', BloxApp);


