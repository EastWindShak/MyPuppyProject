import { ItemService } from '../../services/ItemService/Item-Service';
import { Nav, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { LoginProvider } from '../../providers/login/login';
import { MyApp } from '../../app/app.component';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [],
})
export class HelloIonicPage {
  @ViewChild(Nav) nav: Nav;
  user : {name: string , password: string };
  icons: string[];
  constructor(public itemmanagement: ItemService, public auth:LoginProvider, public navCtrl: NavController ) {
    this.user = {name : '' ,password : ''};
    this.itemmanagement.setAll()
  }

  isAuthenticated() : void {
  
      this.auth.authenticated();
      
    
  }
  
  logForm() : void {
    
    var a = this.auth.login1(this.user);
    if( a ) {
      console.log(a);
      this.user = {name : '' ,password : ''};
      //this.nav.setRoot(WelcomePage);
      //this.navCtrl.push(ListPage, this);
      this.navCtrl.setRoot(ListPage);
    }
    
}
}
