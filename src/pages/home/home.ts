import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


// import { HttpClientModule } from "@angular/common/http"; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {
	req: any;
  constructor(public navCtrl: NavController, public http: HttpClient) {


  }
  makeRequest(){
   this.req = this.http.get('http://f16190f8.ngrok.io/posts');
   this.req.subscribe(data => {
   	console.log("data",data);
   })
  }

  goToLogin(){
    this.navCtrl.setRoot("LoginPage");
  }
}
