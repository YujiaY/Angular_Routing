import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   // loginStatus = new EventEmitter<boolean>();
  isLogin;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.isLogin = this.authService.loggedIn;
  }
  onLoadServer(id: number) {
    //complex calculation
    this.router.navigate(
      ['/servers', id, 'edit'],
      {queryParams: {allowEdit: '1'}
      ,fragment: 'loading'}
      );

  }
  onLogin() {
    this.authService.login();
    this.isLogin = true;
    // this.loginStatus.emit(this.isLogin);
  }
  onLogout() {
    this.authService.logout();
    this.isLogin = false;
    // this.loginStatus.emit(this.isLogin);
  }
}
