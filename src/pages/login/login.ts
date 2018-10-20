import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController, Events} from 'ionic-angular';
import {RegisterComponent} from '../../components/register/register';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
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

login(){
	this.navCtrl.setRoot('OwnedBooksPage');
}

}
