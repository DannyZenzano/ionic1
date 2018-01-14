import { Injectable } from '@angular/core';
//import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class ComunicadosService{
    //constructor(public afDB: AngularFireDatabase) { }

    comunicados=[
        {id:1, titulo:'COMUNICADO 1', texto:'Texto del comunicado1', autor:'Danny', fecha:'2017/01/08 15:20:31'},
        {id:2, titulo:'COMUNICADO 2', texto:'Texto del comunicado2', autor:'Pedro', fecha:'2017/01/08 15:20:32'},
        {id:3, titulo:'COMUNICADO 3', texto:'Texto del comunicado3', autor:'Juan', fecha:'2017/01/08 15:20:33'}
      ]
    estadocuentasatrasados=[
        {id:'1', estado:'Atrasado', monto:'500', fechalimitepago:'2017/01/08 15:20:33'},
        {id:'2', estado:'Atrasado', monto:'45', fechalimitepago:'2017/01/08 15:20:33'},
        {id:'3', estado:'Atrasado', monto:'125', fechalimitepago:'2017/01/08 15:20:33'}
    ]

    usuarios=[
        {id:1, nombre:'Danny Zenzano', casa:'22-S', telefono:'44221471'},
        {id:2, nombre:'Paco Peco', casa:'2-N', telefono:'4222223'},
        {id:3, nombre:'Fulanito de Tal', casa:'10', telefono:'4232322'}        ,
        {id:4, nombre:'Juana la Cubana', casa:'25', telefono:'4211111'} 
      ]

      mensajes=[
        {id:1,nombre:'Danny Zenzano', userid:'1', texto:'Hola queria saber si habia bloqueo', fecha:'2017/01/08 15:20:31'},
        {id:2,nombre:'Paco Peco', userid:'2', texto:'yo logre pasar bien', fecha:'2017/01/08 16:20:31'},
        {id:3,nombre:'Fulanito de Tal', userid:'3', texto:'estaba bloqueado pero ya esta despejado', fecha:'2017/01/08 17:20:31'},
        {id:4,nombre:'Danny Zenzano', userid:'1', texto:'gracias', fecha:'2017/01/08 18:20:31'}         
      ]

    //estadocuentas={id:'Danny', estado:'Atrasado', monto:'500', fechalimitepago:'2017/01/08 15:20:33'};

    idUsuario='4'; //Obtener el ID De usuario de FIREBASE

    public getcomunicados(){
        return this.comunicados;
    }
    public getmensajes(){
        return this.mensajes;
    }
    public getmyid(){        
        return this.idUsuario;
    }
    public getusuario(id){
        return this.usuarios.filter(function(e, i){ return e.id == id})[0] || {id:null, nombre:null, casa:null, telefono:null} ;        
    }

    public getcomunicado(id){
        return this.comunicados.filter(function(e, i){ return e.id == id})[0] || {id:null, titulo:null, texto:null, autor:null, fecha:null};

    }
    public crearcomunicado(comunicado){
        this.comunicados.push(comunicado);
        //this.afDB.database.ref('copropietarios/comunicados/'+comunicado.id).set(comunicado);
    }
    public editarcomunicado(comunicado){
        for(let i; i< this.comunicados.length; i++){
            if(this.comunicados[i].id==comunicado.id){
                console.log('editando...'+comunicado.id);
                this.comunicados[i]=comunicado
            }
        }
    }
    public editaruserdata(user){
        for(let i; i< this.usuarios.length; i++){
            if(this.usuarios[i].id==user.id){
                console.log('editando...'+user.id);
                this.usuarios[i]=user
            }
        }
    }

    public eliminarcomunicado(comunicado){
        console.log('COMUNICADOSSERVICE.eliminarcomunicado');
        console.log('COMUNICADOSSERVICE.eliminarcomunicado.comunicado.id='+comunicado.id);
        console.log('this.comunicados.length = '+this.comunicados.length);
        for(let i; i< this.comunicados.length; i++){
            console.log('buscando :'+comunicado.id);
            console.log('i='+i+" ,id="+this.comunicados[i].id);
            if(this.comunicados[i].id==comunicado.id){
                console.log('COMUNICADOSSERVICE.eliminarcomunicado. ENCONTRADO:indice:'+i);
                this.comunicados.splice(i,1);
            }
        }
    }
    public getestadocuentas(id){        
        return this.estadocuentasatrasados.filter(function(e, i){ return e.id == id})[0] || {id:id, estado:'Al Dia', monto:'0.00', fechalimitepago:''};        
    }
    public crearmensaje(mensaje){
        console.log('crearmensaje');
        console.log('crearmensaje mensaje.id:'+mensaje.id);
        console.log('crearmensaje mensaje.nombre:'+mensaje.nombre);
        console.log('crearmensaje mensaje.userid:'+mensaje.userid);
        console.log('crearmensaje mensaje.texto:'+mensaje.texto);
        console.log('crearmensaje mensaje.fecha:'+mensaje.fecha);
        
        this.mensajes.push(mensaje);
        //this.afDB.database.ref('copropietarios/comunicados/'+comunicado.id).set(comunicado);
        
    }

}

