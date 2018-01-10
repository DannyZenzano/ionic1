import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableroPage } from '../tablero/tablero';
import { EstadocuentasPage } from '../estadocuentas/estadocuentas';
import { MensajesPage } from '../mensajes/mensajes';
import { PanicoPage } from '../panico/panico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController) {

  }

  public gototablero(){
    this.navCtrl.push(TableroPage);
  }
  public gotoestadocuentas(){
    this.navCtrl.push(EstadocuentasPage);
  }
  public gotomensajes(){
    this.navCtrl.push(MensajesPage);
  }
  public gotopanico(){
    this.navCtrl.push(PanicoPage);
  }


 

}
