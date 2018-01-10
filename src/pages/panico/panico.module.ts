import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanicoPage } from './panico';

@NgModule({
  declarations: [
    PanicoPage,
  ],
  imports: [
    IonicPageModule.forChild(PanicoPage),
  ],
})
export class PanicoPageModule {}
