import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController, ViewController, Events,AlertController} from 'ionic-angular';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuth} from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import {RestProvider} from "../../providers/rest/rest";
/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
@Injectable()
export class RegisterComponent {

  text: string;
  password: string;
  email: string;
  passwordC: string;
  emailC: string;
  firstname: string;
  lastname:string;
  constructor(public navCtrl: NavController,
   public modalCtrl: ModalController, 
   public viewCtrl: ViewController,
    public events: Events,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private restAPI: RestProvider) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }


closeModal(){
	this.viewCtrl.dismiss();
	this.events.publish('showLoginCard');
	console.log('clicked on closeModal function');
}

alertError(error) {
  var alert = this.alertCtrl.create(
      {
        title: error
      }
    )
  alert.present();
}
finishRegistration(){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (this.password != this.passwordC){
    this.alertError("passwords do not match");
  }
  else if (this.email != this.emailC){
    this.alertError("email do not match");
  }
  else if(this.password.length < 7){
    this.alertError("password must be 6 characters long");
  }
  else if (re.test(String(this.email).toLowerCase()) == false){
    this.alertError("bad email");
  }
  else{

  var result = this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password).then(res =>{
     var usrInfo = {
     uid: res.user.uid,
     email:this.email,
     firstname: this.firstname,
     lastname: this.lastname
   }
       console.log("registered",res.user.uid)
    this.restAPI.addUser(usrInfo).then(( result) =>{
      console.log(result);
    },
    (err) => {
      console.log("error",err);
    },
    );
      this.closeModal()
  },
    fail =>{
      this.alertError("invalid information or this email has already been used")
    }
  );
  }
}


//   makeRequest(uid){
//     var httpOptions = {
//     headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//   })
// };


  //  var req = this.http.post("/createUser", JSON.stringify(usrInfo),httpOptions);
  //  //'http://f16190f8.ngrok.io/createUser'
  //  req.subscribe(data => {
  //    console.log("data",data);
  //  })
  // }

}
