
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './sdk/core/httpinterceptor.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { SearchPipe } from './appPipes/search.pipe';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { NgxStripeModule } from 'ngx-stripe';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, SearchPipe],
  entryComponents: [],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAViINBuMEzYnpgRTmE2aLGVcAI_RsErxM',
      libraries: ['places']
    }),
    NgxStripeModule.forRoot('pk_test_51H4ItYBs0W61I6tPnvZDdy9k3tgCua1cd8NmDQKXMBZr3GhlsAGnHQC9WpEWGDXE7AJmEPqYMWjyzsKN6y91IIB100WX6eOtMM'),HttpClientModule, IonicModule.forRoot(), AppRoutingModule,FormsModule, IonicStorageModule.forRoot()
  ],
  providers: [
      
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
    File,
    Camera
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
