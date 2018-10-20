import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnedBooksPage } from './owned-books';

@NgModule({
  declarations: [
    OwnedBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnedBooksPage),
  ],
})
export class OwnedBooksPageModule {}
