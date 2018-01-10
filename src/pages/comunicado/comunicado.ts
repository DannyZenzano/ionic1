import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComunicadosService } from '../../services/comunicados.service';
import { NuevocomunicadoPage } from '../nuevocomunicado/nuevocomunicado';

/**
 * Generated class for the ComunicadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comunicado',
  templateUrl: 'comunicado.html',
})
export class ComunicadoPage {
  comunicado={id:null, titulo:null, texto:null, autor:null, fecha:null};
  id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public comunicadoservicio:ComunicadosService) {
    this.id = navParams.get('id');
    this.comunicado = comunicadoservicio.getcomunicado(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComunicadoPage');
  }
  public gotoeditarcom(id){
    this.navCtrl.push(NuevocomunicadoPage,{id:id});
  }
  public eliminarcom(){
      console.log('comunicado.ts;eliminarcom');
      this.comunicadoservicio.eliminarcomunicado(this.comunicado);
      alert('Comunicado eliminado exitosamente!');
      this.navCtrl.pop();
  }
    
}
