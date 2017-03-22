import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MainPage } from '../pages/main/main';
import { MercuryPage } from '../pages/mercury/mercury';
import { GeminiPage } from '../pages/gemini/gemini';
import { ApolloPage } from '../pages/apollo/apollo';
import { AstpPage } from '../pages/astp/astp';
import { SkylabPage } from '../pages/skylab/skylab';
import { ShuttlePage } from '../pages/shuttle/shuttle';
import { OrionPage } from '../pages/orion/orion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  projects: Array<any> = [];
  title: String = 'Projects';
  menuToggleState: Boolean = false;

  constructor(public menuCtrl: MenuController, public platform: Platform, public events: Events) {
    this.rootPage = MainPage;

    this.projects = [
      { name: 'Mercury', details: MercuryPage },
      { name: 'Gemini', details: GeminiPage },
      { name: 'Apollo', details: ApolloPage },
      { name: 'Skylab', details: SkylabPage },
      { name: 'ASTP', details: AstpPage },
      { name: 'Space Shuttle', details: ShuttlePage },
      { name: 'Orion', details: OrionPage }
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.platform.width() < 768 ? this.menuToggleState = true : this.menuToggleState = false;
    });
  }

  projectSelected(theProject) {
    this.nav.setRoot(theProject.details);
    this.menuCtrl.close();
  }

  updateTitles() {
    this.platform.width() < 768 ? this.menuToggleState = true : this.menuToggleState = false;
    this.events.publish('title:updated', { menuState: this.menuToggleState });
  }
}
