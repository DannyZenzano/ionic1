import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class ComunicadosService{
    constructor(public afDB: AngularFireDatabase) { }

    comunicados=[
        {id:1, titulo:'COMUNICADO 1', texto:'Texto del comunicado1', autor:'Danny', fecha:'2017/01/08 15:20:31'},
        {id:2, titulo:'COMUNICADO 2', texto:'Texto del comunicado2', autor:'Pedro', fecha:'2017/01/08 15:20:32'},
        {id:3, titulo:'COMUNICADO 3', texto:'Texto del comunicado3', autor:'Juan', fecha:'2017/01/08 15:20:33'}
      ]

    public getcomunicados(){
        return this.comunicados;
    }

    public getcomunicado(id){
        return this.comunicados.filter(function(e, i){ return e.id == id})[0] || {id:null, titulo:null, texto:null, autor:null, fecha:null};

    }
    public crearcomunicado(comunicado){
        //this.comunicados.push(comunicado);
        this.afDB.database.ref('copropietarios/comunicados/'+comunicado.id).set(comunicado);
    }
    public editarcomunicado(comunicado){
        for(let i; i< this.comunicados.length; i++){
            if(this.comunicados[i].id==comunicado.id){
                console.log('editando...'+comunicado.id);
                this.comunicados[i]=comunicado
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

}

