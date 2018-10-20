import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController, ViewController, Events} from 'ionic-angular';
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
export class RegisterComponent {

  text: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController, public events: Events) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }


closeModal(){
	this.viewCtrl.dismiss();
	this.events.publish('showLoginCard');
	console.log('clicked on closeModal function');
}


finishRegistration(){
	this.closeModal();
}
}
