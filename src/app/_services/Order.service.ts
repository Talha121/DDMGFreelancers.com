import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiurl + 'offer/';
  baseUrl2 = environment.apiurl + 'order/';
constructor(private http: HttpClient) { }

PostOffer(form:any){
  debugger;
    return this.http.post<any>(this.baseUrl+'PostBuyerOffer',form,header)
  }
  
  PostOfferbyseler(form:any){
    debugger;
      return this.http.post<any>(this.baseUrl+'PostsellerOffer',form,header)
    }
myorders(){
  debugger;
    return this.http.get<any>(this.baseUrl2+'GetSellerOrders',header)
  }
  
}





var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
   'Authorization': "Bearer "+localStorage.getItem('token')
});
const httpOptions = {
  headers: headers_object
};
var header = {
  headers: new HttpHeaders()
    .set('Authorization',  'Bearer ' + localStorage.getItem('token'))
}
var tokencheck= localStorage.getItem('token');
