import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComunicadosService } from '../../services/comunicados.service';

/**
 * Generated class for the EstadocuentasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estadocuentas',
  templateUrl: 'estadocuentas.html',
})
export class EstadocuentasPage {
  estadocuentas={id:null, estado:null, monto:null, fechalimitepago:null};
  usuario={id:null, nombre:null, casa:null, telefono:null};

  constructor(public navCtrl: NavController, public navParams: NavParams, public comunicadoservicio:ComunicadosService) {
    var myid=comunicadoservicio.getmyid();
    this.estadocuentas = comunicadoservicio.getestadocuentas(myid);
    this.usuario = comunicadoservicio.getusuario(myid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadocuentasPage');
  }

}
