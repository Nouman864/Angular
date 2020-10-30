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


  public async savetableid(token) {
    this.storage.set('savetableid', token);
  }

  public async gettableid() {
    return await this.storage.get('savetableid');
  }

  public async savereserveid(token) {
    this.storage.set('savereserveid', token);
  }

  public async getreserveid() {
    return await this.storage.get('savereserveid');
  }

  public async saveflat(token) {
    this.storage.set('saveflat', token);
  }

  public async getflat() {
    return await this.storage.get('saveflat');
  }

  public async rentflat(token) {
    this.storage.set('rentflat', token);
  }


  public async getrentflat() {
    return await this.storage.get('rentflat');
  }


  public async flatpay(token) {
    this.storage.set('flatpay', token);
  }
  public async getflatpay() {
    return await this.storage.get('flatpay');
  }
   

  public async flattoken(token) {
    this.storage.set('flattoken', token);
  }


  public async getflattoken() {
    return await this.storage.get('flattoken');
  }


  public async flatonlinepay(token) {
    this.storage.set('flatonlinepay', token);
  }


  public async getflatonlinepay() {
    return await this.storage.get('flatonlinepay');
  }

  public async savehall(token) {
    this.storage.set('savehall', token);
  }


  public async gethall() {
    return await this.storage.get('savehall');
  }

  public async savehalmenu(token) {
    this.storage.set('savehalmenu', token);
  }

  public async gethalmenu() {
    return await this.storage.get('savehalmenu');
  }
}
