import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PreAuthComponent } from './pre-auth/pre-auth.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, PreAuthComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFireAuth,
    FirebaseAuthentication,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
