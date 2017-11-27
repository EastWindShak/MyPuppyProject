
import { Component } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { IconListPage } from '../icon-list/icon-list';
import { ItemService } from '../../services/ItemService/Item-Service';

/**
 * Generated class for the TururuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tururu',
  templateUrl: 'tururu.html',
})
export class TururuPage {

  
  icons: string[];
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public itemmanagement: ItemService) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
  }


    

  icon : string = 'wifi';
  presentActionSheet() {
    var singleitem : {title: string, note: string, icon: string};
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'password',
          placeholder: 'not 123 please'
        }
      ],
      buttons: [
        {
          text: 'icon',
          handler: data => {
            singleitem = { title : data.title , note : data.password, icon: "" };
            
            this.navCtrl.push(IconListPage , {
              item : singleitem
            }
            
          );
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log(data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            //let icon = this.icons[Math.floor(Math.random() * this.icons.length)]
            let name = data.title;
            let note = data.password;
            //let wea = data.icon;
            singleitem = { title : name , note, icon: "wea" };
            this.itemmanagement.newone(singleitem);
          }
        },
        
      ]
  });
  prompt.present();
}
}
