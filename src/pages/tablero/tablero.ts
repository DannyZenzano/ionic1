import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComunicadoPage } from '../comunicado/comunicado';
import { ComunicadosService } from '../../services/comunicados.service';
import { NuevocomunicadoPage } from '../nuevocomunicado/nuevocomunicado';

/**
 * Generated class for the TableroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tablero',
  templateUrl: 'tablero.html',
})
export class TableroPage {
  @ViewChild('myNav') nav: NavController
  comunicados=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public comunicadosService:ComunicadosService) {
    this.comunicados=comunicadosService.getcomunicados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableroPage');
  }

  public gotocomunicado(id){
    this.navCtrl.push(ComunicadoPage,{id:id});
  }

  public gotonuevocomunicado(){
    this.navCtrl.push(NuevocomunicadoPage,{id:0});
  }

}
