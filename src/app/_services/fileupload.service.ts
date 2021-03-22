import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  baseUrl = environment.apiurl + 'SellerProfile/';
  
  constructor(private http: HttpClient) { }
// uploadprofileimage(profileImage: File): Observable<any> {
//   debugger;
//   var formData: any = new FormData();

//   formData.append("Image", profileImage);
//   formData.append("Id", 2);

// console.log(localStorage.getItem('token'))

//   return this.http.post(this.baseUrl+"PostSellerProfileImage", formData,httpOptions);
// }
uploadprofileimage(profileImage: File): Observable<any> {
  debugger;
  var formData: any = new FormData();

  formData.append("image", profileImage);


  return this.http.post(this.baseUrl+"PostSellerProfileImage", formData,header).pipe(
    catchError(this.errorMgmt)
  )
}
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
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