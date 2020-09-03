import {AuthService} from '../../core/auth.service';
import { CanActivate, Router } from '@angular/router';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  async canActivate() {
    const token = await this.authService.getTokenFromStorage();
    if (!token) {
      this.router.navigateByUrl('/userlogin');
    } else {
      return true;
    }
  }
}