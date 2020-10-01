import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {loginConfig } from '../login.config';
import { Injectable } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient,private authService: AuthService,private storage: Storage) {}
 


 
  public async savehotel(token: string) {
    this.storage.set('hotel', token);
  }

  public async gethotel() {
    return await this.storage.get('hotel');
  }


  public async saveroom(token) {
    this.storage.set('room', token);
  }
public async getroom() {
    return await this.storage.get('room');
  }

  public async bookrom(token) {
    this.storage.set('reserve', token);
  }

  public async getreserverom() {
    return await this.storage.get('reserve');
  }

  public async setpay(token) {
    this.storage.set('pay', token);
  }

}
