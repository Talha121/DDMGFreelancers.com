import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoreyserviceService {
  baseUrl = environment.apiurl + 'Categorey/';
constructor(private http: HttpClient) { }
GetpopularServices(){
  debugger;

  return this.http.get<any>(this.baseUrl+'GetPopularServices')
}
Getcatandsubcat(){
  debugger;

  return this.http.get<any>(this.baseUrl+'GetCategoreyAndSubcategorey')
}
}
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
   'Authorization': "Bearer "+localStorage.getItem('token')
});
const httpOptions = {
  headers: headers_object
};