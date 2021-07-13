import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DocModel } from '../_models/docModel';
import { MsgModel } from '../_models/msgModel';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocDataService {
  baseUrl:string = "http://localhost:4200/";

  constructor(private http: HttpClient) { }

  getDocData(id: number): Observable<any>{
    let url = this.baseUrl + `docData/${id}`; //whateverthatis
    return this.http.get<DocModel>(url , {observe: "response" });
  }

  sendMsg(msg: MsgModel): Observable<any>{
    let url = this.baseUrl + 'msg'
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(msg);
    console.log(body)
     return this.http.post<MsgModel>(url, body,{observe: "response", headers: headers})
  }
}
