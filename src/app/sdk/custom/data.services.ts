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
  public async gethotelpay() {
    return await this.storage.get('pay');
  }
  public async savetokenhotel(token) {
    this.storage.set('tokenhotel', token);
  }
  public async gettokenhotel() {
    return await this.storage.get('tokenhotel');
  }
  public async savepay(token) {
    this.storage.set('payhotel', token);
  }
  public async getpay() {
    return await this.storage.get('payhotel');
  }








  public async newhotel(token) {
    this.storage.set('newhotel', token);
  }

  public async getnewhotel() {
    return await this.storage.get('newhotel');
  }

  public async savehotelid(token) {
    this.storage.set('savehotelid', token);
  }
  public async gethotelid() {
    return await this.storage.get('savehotelid');
  }
  public async saveresturant(token) {
    this.storage.set('saveresturant', token);
  }
  public async getresturant() {
    return await this.storage.get('saveresturant');
  }

  public async savemenuid(token) {
    this.storage.set('savemenuid', token);
  }
  public async getmenuid() {
    return await this.storage.get('savemenuid');
  }


  
}
