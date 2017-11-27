
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from '../services/ItemService/Item-Service';
import { IconListPage } from '../pages/icon-list/icon-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TururuPage } from '../pages/tururu/tururu';
import { LoginProvider } from '../providers/login/login';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TururuPage,
    IconListPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TururuPage,
    IconListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    HTTP
  ]
})
export class AppModule {}
