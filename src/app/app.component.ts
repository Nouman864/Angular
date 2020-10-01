
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/sdk/core/auth.service';
// import { isCordovaAvailable } from '../notify/cordova-avaliable';
// import { oneSignalAppId, sender_id } from '../main';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Client',
      url: '/clientregister',
      icon: 'people'
    },
    {
      title: 'Owner',
      url:'/register',
      icon: 'person'
    },
    {
      title: 'Login',
      url:'/getservice',
      icon: 'log-in'
    }
  ];
  alertCtrl: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   
  }

  logout() {
 
    console.log();
    this.authService.logout();
  }
}