
import { TururuPage } from '../pages/tururu/tururu';
import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, NavController, NavParams, Platform } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';


@Component({
  templateUrl: 'app.html',
  providers: [LoginProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  
  user : {name: string , password: string };
  authenthicated : boolean;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public login: LoginProvider,
  ) {
    this.initializeApp();
    this.user = {name : 'a' ,password : 'a'};
    this.authenthicated = this.login.authenticated();
    // set our app's pages
    this.pages = [
      { title: 'My First List', component: ListPage },
      { title: 'My first component', component: TururuPage},
      
    ];
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }


  
  isAuthenticated()  {
    this.authenthicated = this.login.authenticated();
    return this.authenthicated;
  }


  logout() : void{
    this.login.logout();
    this.user = {name : '' ,password : ''};
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    console.log(this.isAuthenticated());
    this.nav.setRoot(page.component);
  }
}
