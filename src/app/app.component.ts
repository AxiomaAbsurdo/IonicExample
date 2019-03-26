import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCviTqs4VeR-SMrPTYX6G5yEYLnT67hyVc",
  authDomain: "timesheetentr.firebaseapp.com",
  databaseURL: "https://timesheetentr.firebaseio.com",
  projectId: "timesheetentr",
  storageBucket: "timesheetentr.appspot.com",
  messagingSenderId: "524915819635"
};


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
