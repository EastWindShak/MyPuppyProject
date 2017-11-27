
import { ListPage } from '../list/list';
import { LoginProvider } from '../../providers/login/login';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemService } from '../../services/ItemService/Item-Service';


/**
 * Generated class for the IconListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icon-list',
  templateUrl: 'icon-list.html',
})
export class IconListPage {
  myGroup: FormGroup;
  IconForm: any;

  icons: string[];
  selectedItem: {title: string, note: string, icon: string};
  constructor(public navCtrl: NavController, public navParams: NavParams, public itemmanagement: ItemService, auth: LoginProvider) {

    // If we navigated to this page, we will have an item available as a nav param
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.selectedItem = navParams.get('item');

  }

  itemTapped(event, item) {
    this.selectedItem.icon = item;
    this.itemmanagement.newone(this.selectedItem);
    this.navCtrl.setRoot(ListPage);
    
  }

  
  itemSelected(event,item){
    this.itemmanagement.newone(this.selectedItem);
  }


}
