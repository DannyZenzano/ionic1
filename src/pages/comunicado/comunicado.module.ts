import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComunicadoPage } from './comunicado';

@NgModule({
  declarations: [
    ComunicadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ComunicadoPage),
  ],
})
export class ComunicadoPageModule {}
