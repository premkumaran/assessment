import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedata: any;
  // url = "http://localhost:4200/api/update";
  // constructor(public http:HttpClient) { }

  // edit(id:any) {
  //   return this.http.post<any>(this.url,id)
  // }
}
