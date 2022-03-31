import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { users } from '../login/user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = [];
  filterBy: any;
  url = "http://localhost:4200/api/";
  constructor(public http: HttpClient, public dataservice: DataService, public router: Router) { 
    this.getdata() 
  }

  ngOnInit(): void {
    
    
  }
  getdata() {
    this.http.get<any>(this.url+'details').subscribe((res) =>  {
      this.data = res;
      this.dataservice.sharedata = this.data
    });

  }

  
  delete(id:any) {
    this.http.post(this.url+"delete",  {id},{responseType:"text"} ).subscribe(() => {
      this.getdata();  
    });
  }
  // edit(id:any) {
  //   // this.dataservice.sharedata = id;

  //   this.dataservice.sharedata = this.data.find((x:any) => x.id == id)
  //   console.log(id);
  //   this.router.navigate(["/adduser"])
  // }
  filter() {
    this.http.post(this.url + 'filter', {username: this.filterBy}).subscribe((res) => {
      console.log({ username: this.filterBy });
      console.log(res);
      
      
      this.data = res;
    })
  }
  
  logout() {
  
}
}
