import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

constructor() { }
private messageSource = new BehaviorSubject(null);
currentMessage = this.messageSource.asObservable();
private message = new BehaviorSubject("null");
current = this.message.asObservable();

private cartsource = new BehaviorSubject(null);
currentcart = this.cartsource.asObservable();
GigList(message: any) {
  this.messageSource.next(message)
}
loginmodal(m:any){
  debugger;
this.message.next(m);
}
}
