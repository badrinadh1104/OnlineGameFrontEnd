import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public service: RestService) { }
  User = new User();
  ngOnInit(): void {
    this.User = this.service.getUser();

  }

  public logout() {
    alert("LoggedOut SuccessFully")
    this.router.navigate(['login'])
    this.service.setlogout();
    this.service.setUser(new User());
  }
  public isLoggedin() {
    return this.service.isLoggedin();
  }

}
