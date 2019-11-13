import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ParsingServiceService {
httpHeaders = new HttpHeaders().set("Cookie"," group=171-333");
  constructor(private http: HttpClient) { 
  //  this.httpHeaders.set("Cookie","_ym_uid=1569866976359003281; _ym_d=1569866976; _ym_isad=2; group=171-333");
  }
  
  
  getData(param:string){
    return this.http.get("http://localhost:4200/assets/rasp.json").toPromise();
  }
}
