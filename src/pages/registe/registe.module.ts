import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistePage } from './registe';

@NgModule({
  declarations: [
    RegistePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistePage),
  ],
})
export class RegistePageModule {}
