import { LoginProvider } from '../../providers/login/login';
import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ItemService } from '../../services/ItemService/Item-Service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  itemsService : Array<{title: string, note: string, icon: string}>;
  myAuth : LoginProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemmanagement: ItemService, public loadingCtrl: LoadingController,
     public auth: LoginProvider) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      dismissOnPageChange: false
    }).present();
    this.auth = this.navParams.get('auth');
    this.itemmanagement.returnformer();
    this.itemsService = this.itemmanagement.getall();
  }

  getItems(event){
     // make a copy
     let itemscopy : Array<{title: string, note: string, icon: string}>;
     this.itemmanagement.returnformer();
     this.itemsService = this.itemmanagement.getall();
     itemscopy = this.itemsService;
     
         // set val to the value of the ev target
    var val = event.target.value;
     
         // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.itemsService = this.itemsService.filter( (item) => {
             return (item.icon.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
