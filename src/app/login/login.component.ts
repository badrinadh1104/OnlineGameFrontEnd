import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }

  ngOnInit(): void {
  }
  user = new User();
  msg: string = ""
  login() {
    this.service.loginUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.service.setUser(data);
        this.service.setlogin();
        const role = data.role;
        if (role === 'ROLE_USER') {
          console.log("Logged in as a User");
          this.router.navigate(['playcard']);
        } if (role === 'ROLE_ADMIN') {
          console.log("Logged in as a User");
          this.router.navigate(['admindash']);
        } if (role === 'ROLE_CCARE') {
          console.log("Logged in as a User");
          this.router.navigate(['ccaredash']);
        }
      }, (error) => {
        this.msg = "Please Enter the valid Username and Password"
        alert("Incorrect password and Username");
        console.log("Error " + error)
        this.user.username = "";
        this.user.password = "";
      },
      () => console.log("successfully token generated"));


  }
  isLoggedin() {
    return this.service.isLoggedin();
  }

}
