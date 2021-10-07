import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth
  }

  onSignIn(){
    this.authService.signIn().subscribe(res => {
      this.authStatus = res;
      this.router.navigate(['appareils']);
      //console.log('Connexion réussie !!!');
      //console.log("authService.isAuth(): " + this.authStatus);
    });
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
