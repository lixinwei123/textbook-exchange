import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {RestProvider} from "../rest/rest";
/*
  Generated class for the UserinfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserinfoProvider {
uid : any;
  constructor(public http: HttpClient,
  	private afAuth: AngularFireAuth,
    private rest: RestProvider) {
    console.log('Hello UserinfoProvider Provider');

  }
  	subData(){
  	this.afAuth.authState.subscribe(data => {
      if(data.uid){
      	this.setUsrId(data.uid);
        console.log("ok done");
        this.getOwnedBooks();
      }
     else{
       console.log("no one logged in yet");
     }
    });
  	}

  getOwnedBooks(){
    var obj = {
      uid: this.getUsrId()
    }
    this.rest.postRequest(obj, "/getOwnedBooks").then(
      success => {
        console.log("success",success);
      },
      fail =>{
        console.log("fail");
      }
      );
  }
  setUsrId(uid){
  	this.uid = uid
  }

  getUsrId(){
  	return this.uid;
  }
}
