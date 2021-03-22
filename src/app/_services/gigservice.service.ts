import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emptyScheduled } from 'rxjs/internal/observable/empty';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GigserviceService {

  baseUrl = environment.apiurl + 'Gig/';
constructor(private http: HttpClient) { }
getcatwisegig(id:number){
  const body=JSON.stringify(15);
  if(tokencheck!=null){
  return this.http.post<any>(this.baseUrl+'GetCatWiseGigs',body,httpOptions)
  }
  else{
    return this.http.post<any>(this.baseUrl+'GetCatWiseGigsWeb',body,httpOptions)
  }
}
SearchGig(tags){
  const body=JSON.stringify(tags);
  if(tokencheck!=null){
    return this.http.post<any>(this.baseUrl+'GetSearcedGigs',body,httpOptions)
    }
    else{
      return this.http.post<any>(this.baseUrl+'GetSearcedGigsWeb',body,httpOptions)
    }

}
Getpopulargigs(){
  if(tokencheck!=null){
    return this.http.get<any>(this.baseUrl+'GetPopularGigs',header)
    }
    else{
      return this.http.get<any>(this.baseUrl+'GetPopularGigsWeb')
    }

}
getgigdetails(id){
  debugger
  const body=JSON.stringify(id);
  if(tokencheck!=null){
    this.SaveBrowsingGig(id).subscribe((next:any)=>{

    },error=>{
      console.log(error)
    });
    return this.http.post<any>(this.baseUrl+'GetGigDetail',body,httpOptions)
  }
  else{
    return this.http.post<any>(this.baseUrl+'GetGigDetailWeb',body,httpOptions)
  }
  
}
SaveBrowsingGig(id){
  debugger;
var obj={"GigId":id}
  
  return this.http.post<any>(this.baseUrl+'saveBrowsingGig',obj,httpOptions)
 
  
  
}
GigsYouMayLike(){
 
  return this.http.get<any>(this.baseUrl+'GetGigsmayyouLike',header)
 
  
  
}
PostGig(form:any){
  debugger;
    return this.http.post<any>(this.baseUrl+'PostGig',form,header)
  }

  PostGigPackages(form:any){
    debugger;
      return this.http.post<any>(this.baseUrl+'PostGigPackages',form,header)
    
  };
  GetBrowsingGig(){
    debugger;
      return this.http.get<any>(this.baseUrl+'GetBrowsingGig',header)
    
  };
  
  PostGigDescription(form:any){
    debugger;
      return this.http.post<any>(this.baseUrl+'PostGigDescription',form,header)
    
  };
 
  PostGigQuestions(form:any){
    debugger;
      return this.http.post<any>(this.baseUrl+'PostGigQuestions',form,header)
    
  };
  GetUserGigs(){
    debugger;
      return this.http.get<any>(this.baseUrl+'GetUserGigs',header)
    
  };
  PostGigGallery(form:any){
    debugger;
    var gigid=localStorage.getItem('gigpostid');
    const formData = new FormData();
    for (const file of form.Images) {
      formData.append("Images", file)

    };
    formData.append("gigid",gigid)
    for (const file of form.AudioFile) {
      formData.append("AudioFile", file),
      formData.append("VideoFile", file),
      formData.append("Pdfs", file)
  
    }
    for (const file of form.Pdfs) {
      formData.append("VideoFile", file)
    }
    

      return this.http.post<any>(this.baseUrl+'PostGigGallery',formData,header)
    
  };
};

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

