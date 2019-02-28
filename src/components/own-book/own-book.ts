import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController, ViewController, Events, AlertController} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {UserinfoProvider} from "../../providers/userinfo/userinfo";
/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'own-book',
  templateUrl: 'own-book.html'
})
export class OwnBookComponent {

  text: string;
  bookSell = false;
  bookExchange = true;
  bookName: string;
  bookISBN: number;
  bookPrice: number;
  currentIndex: number;
  bookArray : any;
  oldISBN: any;
  currentEdit = false;
  // ownedBooks = [{isbn:1931283412831,name:"Conception of Mind",sell:true,exchange:true,price:46},
		// 		{isbn:1838407937423,name:"Calculus Fundamentals 101",sell:true,exchange:false,price:57},
		// 		{isbn:9534241410034,name:"Art History and Man Kind 221",sell:false,exchange:true,price:88}
  // ];
  ownedBooks: any;
  constructor(public navCtrl: NavController,
   public modalCtrl: ModalController, 
   public viewCtrl: ViewController,
    public events: Events,
    public alertCtrl: AlertController,
    private restAPI: RestProvider,
    private usrInfo: UserinfoProvider
  	) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
    this.getBookArr();
  }



  ionViewWillLeave(){
    this.events.publish('showChoices');
  }
  
getBookArr(){
	this.ownedBooks = this.usrInfo.getBookArray();
	if(this.ownedBooks.length <= 0){
		setTimeout(bad => {this.getBookArr()}, 1000)
	}
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
	else if(!this.bookExchange && !this.bookSell){
		this.showAlert('Please select at least one option for handling your book');
	}
	else if (this.bookSell == true && (this.bookPrice == null || this.bookPrice == 0) ){
		this.showAlert('Invalid price, please enter a valid price');
	}
	else if(String(this.bookISBN).length != 13){
		this.showAlert("Invalid ISBN number");
	}
	else{
		var method;
		if (this.bookSell && this.bookExchange){
			 method = 3
		}
		else if (this.bookSell){
			method = 2
		}
		else{
			method = 1
		}
		var newBookObj = {
			isbn:this.bookISBN,
			name:this.bookName,
			sell: this.bookSell,
			exchange: this.bookExchange,
			price: this.bookPrice
		}
		console.log("foobar",this.usrInfo.getUsrId());
		if(!this.bookSell){
			this.bookPrice = 0;
		}
		var apiObj = {
			isbn:this.bookISBN,
			bName:this.bookName,
			method: method,
			price: this.bookPrice,
			uid: this.usrInfo.getUsrId()
		}

		if(this.currentEdit){
			apiObj["oldisbn"] = this.oldISBN;
			console.log("foooo",this.oldISBN);
			this.ownedBooks[this.currentIndex] = newBookObj;
			this.postReq(apiObj,'/editBook')
			this.currentEdit = false;
		}
		else{
			this.ownedBooks.push(newBookObj);
			this.postReq(apiObj,'/postOwnBook')
		}
		this.bookISBN = null;
		this.bookName = "";
		this.bookExchange = true;
		this.bookSell = false;
		this.bookPrice = null;

	}
}

deleteBook(bookInfo){
	console.log("bookInfo",bookInfo);

	for(var i in this.ownedBooks){
		if(this.ownedBooks[i].isbn == bookInfo.isbn){
			this.ownedBooks.splice(parseInt(i),1);
			var obj = {
				isbn: bookInfo.isbn,
				uid: this.usrInfo.getUsrId()
			}
				this.postReq(obj,'/deleteBook')
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
postReq(obj, url){
	 this.restAPI.postRequest(obj,url).then(( result) =>{
	      console.log(result);
	    },
	    (err) => {
	      console.log("error",err);
	    }
	)
}
editBook(bookInfo){
	this.currentEdit = true;
	this.bookSell = bookInfo.sell;
	this.bookExchange = bookInfo.exchange;
	this.bookISBN = bookInfo.isbn;
	this.bookPrice = bookInfo.price;
	this.bookName = bookInfo.name;
	for(var i in this.ownedBooks){
		if(this.ownedBooks[i].isbn == bookInfo.isbn){
			this.oldISBN = this.ownedBooks[i].isbn;
			this.currentIndex = parseInt(i);
	}
	}
}

}
