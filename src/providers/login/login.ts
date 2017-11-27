import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  data : any;
  logged : boolean;
  names : string[] = ["jon","sonia","hamijo"];
  BasicPath = '/oasp4j-sample-server';
  loginPath = '/login';
  header = '';


  constructor(public http: HttpClient, public httpIonic: HTTP) {
    this.http = http;
    this.httpIonic= httpIonic;
    this.data = null;
  }

 
  IonicLogin1(){
    return new Promise(resolve => {
      this.httpIonic.get('http://localhost:8081/oasp4j-sample-server/login',{},{}).then(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  IonicLogin2(){
    return new Promise(resolve => {
      this.http.post('http://localhost:8081/oasp4j-sample-server/services/rest/login',{j_username: "waiter",j_password: "waiter"}).subscribe(data => {
        console.log("tururu");
      }, err => {
        console.log(err);

      });
    });
      }

  login1(loginparams : any): any {
    
    // this would connect to a rest service


    //this.httpIonic.useBasicAuth(loginparams.name,loginparams.name);
    var header = this.IonicLogin2()
    
    

     

    /* this.httpIonic.get('ionic.io', {}, {})
    .then(data => {
  
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    }); 
    */

    /* this.http.get('localhost:8081',{})
    .subscribe(data => {
      console.log(data);
    }) */
    /*if( loginparams.name == "jon" && loginparams.password == "wea") {
      this.logged = true;
      return true;
    }
    return false;
    */
    
  }

  logout(): void {
    console.log("out");
    this.logged = false;
  }

  authenticated(): boolean{
    // console.log(this.logged);
    return this.logged;
  }


}
