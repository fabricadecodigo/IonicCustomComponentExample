import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Artigo } from '../../models/artigo';

@IonicPage()
@Component({
  selector: 'page-artigo-detail',
  templateUrl: 'artigo-detail.html',
})
export class ArtigoDetailPage {
  artigo: Artigo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artigo = this.navParams.data.artigo;
  }
}
