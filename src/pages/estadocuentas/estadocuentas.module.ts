import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadocuentasPage } from './estadocuentas';

@NgModule({
  declarations: [
    EstadocuentasPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadocuentasPage),
  ],
})
export class EstadocuentasPageModule {}
