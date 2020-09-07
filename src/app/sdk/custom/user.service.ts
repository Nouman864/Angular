import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginConfig } from '../login.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public userLogin(credentials: object): Observable<any> {
    // this url will be http://localhost:3000/users/login
    const url = loginConfig.getPath() + '/users/login';

    return this.http.post(url, credentials);
  }
  public userRegister(credentials: object): Observable<any> {
    const url = loginConfig.getPath() + '/users/signup';

    return this.http.post(url, credentials);
  }

  public userVerify(credentials: object): Observable<any> {
    const url = loginConfig.getPath() + '/users/verify';

    return this.http.post(url, credentials);
  }



  public updatePassword(credentials: object): Observable<any> {
    const url = loginConfig.getPath() + '/users/updatepass';

    return this.http.post(url, credentials);
  }
  public updateclientpass(credentials: object): Observable<any> {
    const url = loginConfig.getPath() + '/clients/clientpass';

    return this.http.post(url, credentials);
  }





  public clientRegister(credentials: object): Observable<any> {
    const url = loginConfig.getPath() + '/clients/signup';

    return this.http.post(url, credentials);
  }
  public clientVerify(credentials: object): Observable<any> {
    const url = loginConfig.getPath() + '/clients/clientverify';

    return this.http.post(url, credentials);
  }

  public clientLogin(credentials: object): Observable<any> {
    // this url will be http://localhost:3000/users/login
    const url = loginConfig.getPath() + '/clients/login';

    return this.http.post(url, credentials);
  }
  
  public customer(credentials: object): Observable<any> {
    // this url will be http://localhost:3000/users/login
    const url = loginConfig.getPath() + '/clients/pay';

    return this.http.post(url, credentials);
  }

  
}