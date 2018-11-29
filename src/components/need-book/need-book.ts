import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController, ViewController, Events, AlertController} from 'ionic-angular';
/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'need-book',
  templateUrl: 'need-book.html'
})
export class NeedBookComponent {

  text: string;
  bookBuy = false;
  bookExchange = true;
  bookName: string;
  bookISBN: number;
  bookPrice: number;
  currentIndex:number;
  currentEdit = false;
  ownedBooks = [{isbn:1931283412831,name:"Conception of Mind",buy:true,exchange:true, price: 21},
				{isbn:1838407937423,name:"Calculus Fundamentals 101",buy:true,exchange:false, price: 34},
				{isbn:9534241410034,name:"Art History and Man Kind 221",buy:false,exchange:true}
  ];
  constructor(public navCtrl: NavController,
   public modalCtrl: ModalController, 
   public viewCtrl: ViewController,
    public events: Events,
    public alertCtrl: AlertController
  	) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }


closeModal(){
	this.viewCtrl.dismiss();
	this.events.publish('showChoices');
	console.log('clicked on closeModal function');
}


addBook(){
	if(!this.bookISBN || !this.bookName){
		this.showAlert('you are missing either the ISBN or the name');
	}
	else if(!this.bookExchange && !this.bookBuy){
		this.showAlert('Please select at least one option for handling your book');
	}
	else{
		var newBookObj = {
			isbn:this.bookISBN,
			name:this.bookName,
			buy:this.bookBuy,
			exchange:this.bookExchange,
			price: this.bookPrice
		}
		if(this.currentEdit){
			this.ownedBooks[this.currentIndex] = newBookObj;
			this.currentEdit = false;
		}
		else{
			this.ownedBooks.push(newBookObj);
		}
		this.bookISBN = null;
		this.bookName = "";
		this.bookExchange = true;
		this.bookBuy = false;
		this.bookPrice = null;
	}
}

deleteBook(bookInfo){
	console.log("bookInfo",bookInfo);

	for(var i in this.ownedBooks){

		if(this.ownedBooks[i].isbn == bookInfo.isbn){
			this.ownedBooks.splice(Number(i),1);
		}
	}
}

showAlert(alertMessage){
	let alertCtrl = this.alertCtrl.create({
		title: alertMessage,
		buttons: [
		{
			text: "got it",
			role: "cancel"
		}
		]
	});
	alertCtrl.present();
}

confirmDeletion(bookInfo){
	let alertCtrl = this.alertCtrl.create({
		title: "are you sure you want to delete this entry?",
		buttons: [
		{
			text: "delete",
			role: "ok",
			handler: () => {
				this.deleteBook(bookInfo)
			}
		},
		{
			text: "cancel",
			role: "cancel",
		}
		]
	});
	alertCtrl.present();
}


editBook(bookInfo){
	this.currentEdit = true;
	this.bookBuy = bookInfo.buy;
	this.bookExchange = bookInfo.exchange;
	this.bookISBN = bookInfo.isbn;
	this.bookPrice = bookInfo.price;
	this.bookName = bookInfo.name;
	for(var i in this.ownedBooks){
		if(this.ownedBooks[i].isbn == bookInfo.isbn){
			this.currentIndex = Number(i);
			console.log("what is this",this.currentIndex);
	}
	}
}
}