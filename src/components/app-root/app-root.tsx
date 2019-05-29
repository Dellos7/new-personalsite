import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        {/*<header>
          <h1>Stencil App Starter</h1>
        </header>*/}
        <rrss-navbar githubUser="Dellos7" twitterUser="_dlopezcast" codepenUser="dellos7" linkedinUser="david-lopez-castellote"></rrss-navbar>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
