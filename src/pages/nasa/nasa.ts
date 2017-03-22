import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-nasa',
  templateUrl: 'nasa.html'
})
export class NasaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  goMeatball() {
    this.navCtrl.pop();
  }
}
