import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import { setPassiveTouchGestures, setRootPath } from "../node_modules/@polymer/polymer/lib/utils/settings.js";
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../node_modules/@polymer/app-route/app-location.js";
import "../node_modules/@polymer/app-route/app-route.js";
import "../node_modules/@polymer/iron-pages/iron-pages.js";
import "../node_modules/@polymer/iron-selector/iron-selector.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import './my-icons.js';
setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #F3D879;
          --app-secondary-color: #3D4956;
          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-toolbar {
          max-width:1100px;
          margin: 0px auto;
        }

        iron-pages {
          max-width:1100px;
          margin: 0px auto;  
        }

        app-header {
          color: --app-secondary-color;
          background-color: #FFFFFF;
        }

        app-header .center {
          text-align: center;
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

        .bold {
          font-weight:700;
        }
      </style>
      <iron-media-query query="(min-width: 600px)" query-matches="{{desktop}}"></iron-media-query>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}" force-narrow="">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="view1" href="[[rootPath]]view1">View One</a>
            <a name="view2" href="[[rootPath]]view2">View Two</a>
            <a name="view3" href="[[rootPath]]view3">View Three</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall" fixed="">
            <app-toolbar>
              <template is="dom-if" if="{{!desktop}}">
                <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              </template>
              <div main-title="" class="center">EOS <span class="bold">BLOX</span></div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 name="view1"></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 name="view3"></my-view3>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return ['_routePageChanged(routeData.page)'];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'view1';
    } else if (['view1', 'view2', 'view3'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'view1':
        import('./my-view1.js');
        break;

      case 'view2':
        import('./my-view2.js');
        break;

      case 'view3':
        import('./my-view3.js');
        break;

      case 'view404':
        import('./my-view404.js');
        break;
    }
  }

}

window.customElements.define('my-app', MyApp);