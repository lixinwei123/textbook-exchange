import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = "http://f16190f8.ngrok.io"
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


 addUser(uObj) {
  return new Promise((resolve, reject) => {
     this.http.post(this.apiUrl+'/createUser', uObj, {responseType: 'text'})
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}