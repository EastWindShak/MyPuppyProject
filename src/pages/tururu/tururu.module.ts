import { ItemService } from '../../services/ItemService/Item-Service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TururuPage } from './tururu';

@NgModule({
  declarations: [
    TururuPage,
  ],
  imports: [
    IonicPageModule.forChild(TururuPage),
  ],
  providers: [
    ItemService,
  ]
})
export class TururuPageModule {}
