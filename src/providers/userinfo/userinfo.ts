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
bookArray : any;
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
    this.bookArray = [];
    var obj = {
      uid: this.getUsrId()
    }
    this.rest.postRequest(obj, "/getOwnedBooks").then(
      success => {
                console.log("success",success);
        success = JSON.parse(success);
        var bookArr = [];
        for(var i in success){
            var price, sell, exchange;
            if(success[i].PRICE == 0){
              price = null;
            }
            else{
              price = success[i].PRICE;
            }
            if(success[i].METHOD == 1){
                sell = false;
                exchange = true;
            }
            else if(success[i].METHOD == 2){
                sell = true;
                exchange = false;
            }
            else if(success[i].METHOD == 3){
                sell = true;
                exchange = true;
            }
            var bookObj = {
              isbn: success[i].ISBN,
              name: success[i].title,
              price: price,
              sell: sell,
              exchange: exchange
            };
          bookArr.push(bookObj);
        }
        this.bookArray = bookArr
        console.log("omg",bookArr);
        return bookArr
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

  getBookArray(){
    return this.bookArray;
  }
}
