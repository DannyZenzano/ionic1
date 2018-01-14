import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComunicadosService } from '../../services/comunicados.service';

/**
 * Generated class for the MisdatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misdatos',
  templateUrl: 'misdatos.html',
})
export class MisdatosPage {

  usuario={id:null, nombre:null, casa:null, telefono:null};

  constructor(public navCtrl: NavController, public navParams: NavParams, public comunicadosService:ComunicadosService) {
    var myid=comunicadosService.getmyid();    
    this.usuario = comunicadosService.getusuario(myid);    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisdatosPage');
  }

  guardatosusuario(){
    //Estamos editando
    this.comunicadosService.editaruserdata(this.usuario);   
    alert('Datos guardados correctamente!');
    this.navCtrl.pop();
  }

}
