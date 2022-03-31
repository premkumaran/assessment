import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from '../login/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  insert: users = new users;
  update: any = [];
  url = "http://localhost:4200/api/"
  constructor(public router: Router, public http: HttpClient,public data: DataService,public active:ActivatedRoute) {

    this.update = data.sharedata;  
    console.log(this.update);
  
  }
  text = "Register";
  Edit: boolean = false;
  index: string | any = "";
  ngOnInit(): void {
      
    this.index = this.active.snapshot.paramMap.get("id")
    if (this.index>= 0 && this.index!== null) {
      this.Edit = true;
      this.text = "Update"
      this.insert.id = this.update[this.index].id;
      this.insert.username = this.update[this.index].username;
      this.insert.password = this.update[this.index].password;
      this.insert.email = this.update[this.index].email;
      this.insert.usertype = this.update[this.index].usertype;
      this.insert.phonenumber = this.update[this.index].phonenumber;
      this.insert.address = this.update[this.index].address;
    }
  }
  add() {
    this.http.post<any>(this.url+"insert", this.insert).subscribe((res) => {
      this.insert = res;
    });
    this.router.navigate(["/home"])
  }
  Update() {
    
    this.http.post<any>(this.url+"update", this.insert).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(["/home"])
    
    
  }
  perform() {
        if (this.Edit) {
          this.Update();
        } else {
          this.add();
        }
      }
  logout() {
    
  }
}



