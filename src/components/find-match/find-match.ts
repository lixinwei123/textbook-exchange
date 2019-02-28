import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController, ViewController, Events, AlertController} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {UserinfoProvider} from "../../providers/userinfo/userinfo";

/**
 * Generated class for the FindMatchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'find-match',
  templateUrl: 'find-match.html'
})
export class FindMatchComponent {

  text: string;
  exchangerArray: any;
  sellerArray: any;
  buyerArray: any;

  constructor(
   public navCtrl: NavController,
   public modalCtrl: ModalController, 
   public viewCtrl: ViewController,
   public events: Events,
   public alertCtrl: AlertController,
   private restAPI: RestProvider,
   private usrInfo: UserinfoProvider,
   private rest: RestProvider
  	) {
    console.log('Hello FindMatchComponent Component');
    this.text = 'Hello World';
    this.findExchanger();
    this.findSeller();
    this.findBuyer();
  }

closeModal(){
	this.viewCtrl.dismiss();
	this.events.publish('showChoices');
	console.log('clicked on closeModal function');
}

  ionViewWillLeave(){
    this.events.publish('showChoices');
  }
  
findExchanger(){
	this.exchangerArray = [];
	var user_obj = {
		user_id: this.usrInfo.getUsrId()
	} 
	console.log(user_obj)
	this.rest.postRequest(user_obj, "/findExchanger").then(
      success => {
                console.log("success",success);
        //success = JSON.stringify(success);
        success = JSON.parse(success.toString());
        for(var i in success){
            var exchangerObj = {
           	  name: success[i].first_name + " " + success[i].last_name,
              email: success[i].email,
              owned_ISBN: success[i].OWNED_ISBN,
              owned_title: success[i].OWNED_Title,
              need_ISBN: success[i].NEED_ISBN,
              need_title: success[i].NEED_Title,
            };
          this.exchangerArray.push(exchangerObj);
        }
        console.log("omg",this.exchangerArray);
        return this.exchangerArray
      },
      fail =>{
        console.log("fail");
      }
      );
}

findSeller(){
  this.sellerArray = [];
  var user_obj = {
    user_id: this.usrInfo.getUsrId()
  }
  console.log(user_obj)
  this.rest.postRequest(user_obj, "/findSeller").then(
    success => {
      console.log("success", success);
      success = JSON.parse(success.toString());
      for(var i in success){
        var sellerObj = {
          name: success[i].first_name + " " + success[i].last_name,
          email: success[i].email,
          need_title: success[i].title,
          need_ISBN: success[i].ISBN,
          price: "$ " + success[i].PRICE,
        };
        this.sellerArray.push(sellerObj);
      }
      console.log("omg", this.sellerArray);
      return this.sellerArray
    },
    fail =>{
      console.log("fail");
    }
    );
}

findBuyer(){
  this.buyerArray = [];
  var user_obj = {
    user_id: this.usrInfo.getUsrId()
  }
  console.log(user_obj)
  this.rest.postRequest(user_obj, "/findBuyer").then(
    success => {
      console.log("success", success);
      success = JSON.parse(success.toString());
      for(var i in success){
        var buyerObj = {
          name: success[i].first_name + " " + success[i].last_name,
          email: success[i].email,
          owned_title: success[i].title,
          owned_ISBN: success[i].ISBN,
          price: "$ " + success[i].PRICE,
        };
        this.buyerArray.push(buyerObj);
      }
      console.log("omg", this.buyerArray);
      return this.buyerArray
    },
    fail =>{
      console.log("fail");
    }
    );
}

postReq(obj, url){
	 this.restAPI.postRequest(obj,url).then(( result) =>{
	      console.log(result);
	    },
	    (err) => {
	      console.log("error",err);
	    }
	)
}
}
