import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  baseUrl = environment.apiurl + 'Chat/';
  constructor(private http: HttpClient) { }
  GetUserMessage(){
    debugger;
  
    return this.http.get<any>(this.baseUrl+"GetMessage",header);
  }
  GetSingleChatMessage(id){
    debugger;
  var data=JSON.stringify(id)
    return this.http.post<any>(this.baseUrl+"GetSingleUserMessage",id,header);
  }
  sendmessgae(form:any){
    debugger;
    var formData: any = new FormData();
    var ChatMessage={};
    // formData.append("ChatMessage",obj)
    return this.http.post<any>(this.baseUrl+"SendMessage",form, httpOptions)
  }
}
var header = {
  headers: new HttpHeaders()
    .set('Authorization',  'Bearer ' + localStorage.getItem('token'))
}
var headers_object = new HttpHeaders({

   'Authorization': "Bearer "+localStorage.getItem('token')
});
const httpOptions = {
  headers: headers_object
};