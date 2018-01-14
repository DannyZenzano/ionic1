import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComunicadosService } from '../../services/comunicados.service';

/**
 * Generated class for the NuevocomunicadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevocomunicado',
  templateUrl: 'nuevocomunicado.html',
})
export class NuevocomunicadoPage {
  comunicado={id:null, titulo:null, texto:null, autor:null, fecha:null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public comunicadosService:ComunicadosService) {
    this.id = navParams.get('id');
    if(this.id !=0){
       this.comunicado = comunicadosService.getcomunicado(this.id); 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevocomunicadoPage');
  }
  guardarcomunicado(){
    if(this.id != 0){
      //Estamos editando
      this.comunicadosService.editarcomunicado(this.comunicado);   
      alert('Comunicado editado y publicado exitosamente!');
      this.navCtrl.pop();

    }else{

        this.comunicado.id=Date.now();
        this.comunicado.autor=this.comunicadosService.getmyid();
        var hoy=new Date();
        var mes= hoy.getMonth()+1;
        this.comunicado.fecha=hoy.getFullYear()+"-"+mes+"-"+hoy.getDate()+" "+hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds();
        this.comunicadosService.crearcomunicado(this.comunicado);   
        alert('Comunicado publicado exitosamente!');
        this.navCtrl.pop();
    }
  }

}
