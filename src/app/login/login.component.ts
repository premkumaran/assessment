import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: users = new users;
  url = "http://localhost:4200/api/users"

  constructor(public router:Router,public http:HttpClient) { }

  ngOnInit(): void {
  }
  login() {
    
    this.http.post<any>(this.url, this.log).subscribe((res) => {
      let info = res.user;
      console.log(res.user);
      
      if (res.status==="success") {
       if (info.usertype==="admin") {
         this.router.navigate(["/home"])
       }
        if (info.usertype === "customer") {
          this.router.navigate(["/home"])
        }
      
      }

    else{
          console.log("something went wrong");   

      }
    });
      }
}
