/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface DlcTerminal {}
  interface RrssNavbar {
    'codepenUser': string;
    'githubUser': string;
    'linkedinUser': string;
    'twitterUser': string;
  }
}

declare global {

  // Adding a global JSX for backcompatibility with legacy dependencies
  export namespace JSX {
    export interface Element {}
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLDlcTerminalElement extends Components.DlcTerminal, HTMLStencilElement {}
  var HTMLDlcTerminalElement: {
    prototype: HTMLDlcTerminalElement;
    new (): HTMLDlcTerminalElement;
  };

  interface HTMLRrssNavbarElement extends Components.RrssNavbar, HTMLStencilElement {}
  var HTMLRrssNavbarElement: {
    prototype: HTMLRrssNavbarElement;
    new (): HTMLRrssNavbarElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'dlc-terminal': HTMLDlcTerminalElement;
    'rrss-navbar': HTMLRrssNavbarElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'match'?: MatchResults;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface DlcTerminal extends JSXBase.HTMLAttributes<HTMLDlcTerminalElement> {}
  interface RrssNavbar extends JSXBase.HTMLAttributes<HTMLRrssNavbarElement> {
    'codepenUser'?: string;
    'githubUser'?: string;
    'linkedinUser'?: string;
    'twitterUser'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'dlc-terminal': DlcTerminal;
    'rrss-navbar': RrssNavbar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


