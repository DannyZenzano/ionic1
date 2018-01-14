import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComunicadosService } from '../../services/comunicados.service';

/**
 * Generated class for the MensajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})
export class MensajesPage {

  mensajes=[];
  mensajenuevo={id:4,nombre:null, userid:null, texto:null, fecha:null};
  myid;
  UserActual;
  campotexto;
  constructor(public navCtrl: NavController, public navParams: NavParams, public comunicadosService:ComunicadosService) {
    this.mensajes=comunicadosService.getmensajes();
    this.myid=comunicadosService.getmyid();
    console.log('myid es:'+this.myid);
    this.UserActual=comunicadosService.getusuario(this.myid);
    
    this.mensajenuevo.nombre=this.UserActual.nombre;
    console.log('UserActual.nombre es:'+this.UserActual.nombre);

    this.mensajenuevo.userid=this.myid;
    console.log(this.mensajenuevo.toString());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajesPage');
  }

  guardarmensaje(){    
    console.log('guardar mensaje');
    console.log('this.mensajenuevo.texto:'+this.mensajenuevo.texto);
    var hoy=new Date();
    var mes= hoy.getMonth()+1;
    this.mensajenuevo.texto=this.campotexto;
    this.mensajenuevo.fecha=hoy.getFullYear()+"-"+mes+"-"+hoy.getDate()+" "+hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds();
    this.mensajenuevo.id=Date.now();
        this.comunicadosService.crearmensaje(this.mensajenuevo);                      
  }

}
