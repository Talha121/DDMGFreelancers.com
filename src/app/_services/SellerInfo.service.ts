import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerInfoService {

  baseUrl = environment.apiurl + 'SellerProfile/';
  baseUrl2=environment.apiurl+'Categorey/'
constructor(private http: HttpClient) { }
PostSellerPersonalInfo(form:any){
debugger;
  return this.http.post<any>(this.baseUrl+'PostSellerPersonalInfo',form,header)
};
PostSellerProffessionalInfo(form:any){
  debugger;
    return this.http.post<any>(this.baseUrl+'PostSellerProffessionalInfo',form,header)
  }
  Activateseller(){
    debugger;
      return this.http.get<any>(this.baseUrl+'ActivateSeller',header)
    }
    Userinfo(){
      debugger;
        return this.http.get<any>(this.baseUrl+'GetProfile',header)
      }
PostSellerLanguage(form:any){
debugger;
  return this.http.post<any>(this.baseUrl+'PostSellerLangauge',form,header)
}
isactivate(){
  return this.http.get<any>(this.baseUrl+"IsAcivated",header)
}

Getcategories(){
  return this.http.get<any>(this.baseUrl2+'GetCategoreyAndSubcategorey')
};
GetSubcategories(){
  return this.http.get<any>(this.baseUrl2+'GetSubcategories')
};
ExpLevels(){
  return this.http.get<any>(this.baseUrl+'GetExperienceLevel',httpOptions)
};
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