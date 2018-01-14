import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TableroPage } from '../pages/tablero/tablero';
import { EstadocuentasPage } from '../pages/estadocuentas/estadocuentas';
import { MensajesPage } from '../pages/mensajes/mensajes';
import { PanicoPage } from '../pages/panico/panico';
import { ComunicadoPage } from '../pages/comunicado/comunicado';
import { ComunicadosService } from '../services/comunicados.service';
import { NuevocomunicadoPage } from '../pages/nuevocomunicado/nuevocomunicado';
import { MisdatosPage } from '../pages/misdatos/misdatos';

/*
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

export const configFirebase = {
  apiKey: "AIzaSyChcr_NnTUwWCVXnuYhzD_7X8l6oXX7MF8",
  authDomain: "ionicchat-df8cd.firebaseapp.com",
  databaseURL: "https://ionicchat-df8cd.firebaseio.com",
  projectId: "ionic-chat-77c25",
  storageBucket: "ionicchat-df8cd.appspot.com",
  messagingSenderId: '482878141920'
};
*/
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TableroPage,
    EstadocuentasPage,
    MensajesPage,
    PanicoPage,
    ComunicadoPage,
    NuevocomunicadoPage,
    MisdatosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AngularFireModule.initializeApp(configFirebase),
    //AngularFireDatabaseModule,
    //AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TableroPage,
    EstadocuentasPage,
    MensajesPage,
    PanicoPage,
    ComunicadoPage,
    NuevocomunicadoPage,
    MisdatosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ComunicadosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //AngularFireDatabase,
    //AngularFireAuth
  ]
})
export class AppModule {}
