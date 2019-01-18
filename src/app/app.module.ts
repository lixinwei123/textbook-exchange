import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterComponent} from '../components/register/register';
import {OwnBookComponent} from '../components/own-book/own-book';
import {NeedBookComponent} from '../components/need-book/need-book';
// import { HTTP } from '@ionic-native/http';
// import { HttpClient } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http"; 
// import {RegisterPage} from '../pages/register/register';
// import {LoginPage} from '../pages/login/login';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterComponent,
    OwnBookComponent,
    NeedBookComponent
    // RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterComponent,
    OwnBookComponent,
    NeedBookComponent
    // RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
