import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'rrss-navbar',
    styleUrl: 'rrss-navbar.scss'
})
export class RrssNavbar {

    @Prop() githubUser: string;
    @Prop() twitterUser: string;
    @Prop() codepenUser: string;
    @Prop() linkedinUser: string;

    render() {
        return (
            <nav class="rrss-navbar">
                <ul class="rrss-navbar-list">
                    <li class="rrss-navbar-list-elem rrss-navbar-list-elem__github"><a href={"https://github.com/" + this.githubUser} target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
                    <li class="rrss-navbar-list-elem rrss-navbar-list-elem__twitter"><a href={"https://twitter.com/" + this.twitterUser} target="_blank"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li class="rrss-navbar-list-elem rrss-navbar-list-elem__codepen"><a href={"https://codepen.io/" + this.codepenUser} target="_blank"><ion-icon name="logo-codepen"></ion-icon></a></li>
                    <li class="rrss-navbar-list-elem rrss-navbar-list-elem__linkedin"><a href={"https://www.linkedin.com/in/" + this.linkedinUser} target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                </ul>
            </nav>
        );
    }
}
