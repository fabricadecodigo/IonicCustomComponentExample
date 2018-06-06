import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Artigo } from '../../models/artigo';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  artigos: Array<Artigo>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.artigos = [
      new Artigo('Como tirar fotos com Ionic de maneira simples', 'FELIPE FRANCO', '20/02/2018', 'http://www.fabricadecodigo.com/wp-content/uploads/ionic-camera-350x230.png', '<p>Nessa aula eu vou te mostrar como tirar fotos com o Ionic de maneira simples.</p>'),
      new Artigo('4 exemplos de utilização do Google Maps/Geolocalização com Ionic', 'FELIPE FRANCO', '30/01/2018', 'http://www.fabricadecodigo.com/wp-content/uploads/google-maps-e-geolocalizacao-com-ionic-350x230.png', '<p>Nessa aula eu ou te mostrar 4 exemplos de utilização do Google Maps/Geolocalização com o Ionic.<br>Você vai aprender:</p>'),
      new Artigo('Como criar um CRUD com Ionic e Firebase – Em alguns simples passos', 'FELIPE FRANCO', '30/01/2018', 'http://www.fabricadecodigo.com/wp-content/uploads/crud-firebase-ionic-350x230.png', '<p>Nessa vídeo aula eu mostro como criar um CRUD (CRUD significa, em inglês, Create, Read, Update e Delete e em português é Incluir, Alterar, Excluir e Consultar) com Ionic e Firebase Realtime Database&nbsp;<strong>usando a nova versão do AngularFire2 (5.0.0).&nbsp;</strong></p>'),
      new Artigo('Consumindo API REST com Ionic – O guia absolutamente completo', 'FELIPE FRANCO', '30/01/2018', 'http://www.fabricadecodigo.com/wp-content/uploads/http-rest-api-ionic-350x230.png', '<p>Nessa vídeo aula eu vou mostrar como fazer requisições HTTP a uma API REST.<br> Esse exemplo é valido tanto para aplicações feitas com Angular e Ionic.<br> E também como paginar os resultados utilizando o&nbsp;InfiniteScroll.</p>')
    ];
  }

  abrirArtigo(artigo: Artigo) {
    this.navCtrl.push('ArtigoDetailPage', { artigo: artigo });
  }
}
