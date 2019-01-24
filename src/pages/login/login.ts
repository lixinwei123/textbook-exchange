import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController, Events} from 'ionic-angular';
import {RegisterComponent} from '../../components/register/register';
import {AngularFireAuth} from "@angular/fire/auth";
// import {RegisterPage} from '../pages/register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
displayLogin = true;
password: string;
email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
    public afAuth: AngularFireAuth,
  	public modalCtrl: ModalController,
  	public actionSheet: ActionSheetController) {
  	this.events.subscribe('showLoginCard', () =>{
  		console.log("this got triggered");
  		this.displayLogin = true;
  	});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

goToRegister(){
	let regModal = this.modalCtrl.create(RegisterComponent);
	regModal.present();
	this.displayLogin = false;
}

async login(){
  try{
        this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(res =>{
        console.log("Logged in ha",res.user);
      if(res.user.uid){
         this.navCtrl.setRoot("OwnedBooksPage");
      }
      });
  }
  catch  (e) {
    console.log(e)
  }
}

}
