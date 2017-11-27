import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { ItemService } from '../../services/ItemService/Item-Service';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public platform: Platform, public itemmanagement: ItemService, public navParams: NavParams, public actionsheetCtrl: ActionSheetController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }
  openMenu(){
      let actionSheetCtrl = this.actionsheetCtrl.create({
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash' ,
            handler: () => {
             this.itemmanagement.deleteone(this.navParams.data.item);
             this.navCtrl.popToRoot();
            }
          },
          {
            text: 'Play',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
              console.log('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: !this.platform.is('ios') ? 'heart-outline' : null,
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]

      });
      actionSheetCtrl.present();
  }
}
