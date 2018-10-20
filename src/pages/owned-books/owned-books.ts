import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,ModalController } from 'ionic-angular';
import {NeedBookComponent} from '../../components/need-book/need-book';
import {OwnBookComponent} from '../../components/own-book/own-book';
/**
 * Generated class for the OwnedBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-owned-books',
  templateUrl: 'owned-books.html',
})
export class OwnedBooksPage {
	mainChoice = true;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public events:Events,
  	 public modalCtrl: ModalController) {
  	 this.events.subscribe('showChoices', () =>{
  		console.log("this got triggered");
  		this.mainChoice = true;
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnedBooksPage');
  }

  goToOwnedBooks(){
  	let modal = this.modalCtrl.create(OwnBookComponent)
  	this.mainChoice = false;
  	modal.present();
  }
  goToNeedBooks(){
  	 let modal = this.modalCtrl.create(NeedBookComponent);
  	 this.mainChoice = false;
  	 	modal.present();
  }
}
