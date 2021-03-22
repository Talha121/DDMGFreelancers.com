import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ChatMessage } from 'src/app/Models/ChatMessage';
import { Offer } from 'src/app/Models/Offer';
import { OfferDetail } from 'src/app/Models/offerDetail';
import { SendMessageDto } from 'src/app/Models/SendMessageDto';
import { ChatServiceService } from 'src/app/_services/ChatService.service';
import { SignalrService } from 'src/app/_services/signalr.service';
import{Howl} from 'howler';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GigserviceService } from 'src/app/_services/gigservice.service';
import { Gig } from 'src/app/Models/Gig';
import { environment } from 'src/environments/environment';
import { OrderService } from 'src/app/_services/Order.service';


@Component({
  selector: 'app-Inbox',
  templateUrl: './Inbox.component.html',
  styleUrls: ['./Inbox.component.scss']
})
export class InboxComponent implements OnInit {
chat:any[]=[];
decodedToken:any;
userid:number;
gig:Gig[]
chatmessage:SendMessageDto;
message:any[]=[];
offer:Offer={}as Offer;
offerdetail:OfferDetail={} as OfferDetail;
chatmessages:ChatMessage={}as ChatMessage ;
newsendingmessage:any;
checked:boolean=false;
Desciption:any;
gigid:any;
buyerid:any;
DeliveryTime:any;
price:any;
chatid:any;
revesion:any;
imagepath=environment+"UserProfileImages/";
recievername:any;
imagebaseurl=environment.imagepath+"/GigImageFiles/";
imagebaseurl1=environment.imagepath+"/UserProfileImages/";
jwtHelper = new JwtHelperService();
@ViewChild(CdkVirtualScrollViewport,{static:false}) viewport: CdkVirtualScrollViewport;
@ViewChildren("commentDiv") commentDivs: QueryList<ElementRef>;
@ViewChildren("fullpage") Pagedown: QueryList<ElementRef>;
@ViewChild('messagebox',{static:false}) private textmessage: ElementRef;


  constructor(private orderservice:OrderService,private chatservice:ChatServiceService,private signalrservice:SignalrService,private modalService: NgbModal,private gigservice:GigserviceService) { }
nav:any;
  ngOnInit() {
    debugger;
    this.nav=localStorage.getItem('nav');
    var user= localStorage.getItem('token');
    this.signalrservice.startConnection();
    this.signalrservice.hubConnection.on("SendMessage", (someText) => {
    debugger
      var mesageeee=JSON.parse(someText);
      this.newsendingmessage={"message":mesageeee.message.Message,"recieverid":mesageeee.message.Chat.RecieverUserId,"senderId":mesageeee.message.Chat.SenderUserId,"chatId":mesageeee.message.Chat.ChatId}
this.message.push(this.newsendingmessage);
var sound = new Howl({
  src: ['assets/sms.mp3']
});

sound.play();

  })
    this.decodedToken = this.jwtHelper.decodeToken(user);
    this.userid=this.decodedToken.ID
    this.chatservice.GetUserMessage().subscribe((next:any)=>{
      console.log(next)
      this.chat=next.res;
      
    })
  }
  ViewMessage(id:number){
    this.checked=true;
    debugger;
var data=this.chat.filter(x=>x.chatId==id);
var reciverid=0;
if(data[0].recieverId==this.userid){
  reciverid=data[0].senderId;
  this.recievername=data[0].senderDetails.username
}
else{
  reciverid=data[0].recieverId;
}
this.buyerid=reciverid;
this.chatid=id;
this.chatservice.GetSingleChatMessage(reciverid).subscribe((next:any)=>{
  console.log(next)
  this.message=next.res.messages;
  this.message.reverse();

})

  }
  selectid(id){
this.gigid=id
  }
SendMessage(id){
  var formData: any = new FormData();
 this.chatmessages.ChatId=id;

 var data=this.chat.filter(x=>x.chatId==id);
var reciverid=0;
if(data[0].recieverId==this.userid){
  reciverid=data[0].senderId;
}
else{
  reciverid=data[0].recieverId;
}
this.chatmessages.recieverid=reciverid;
this.chatmessages.MessageType="";
  this.chatmessages.Message=this.textmessage.nativeElement.value;
  formData.append("ChatMessage",JSON.stringify(this.chatmessages))
  formData.append("offer",JSON.stringify(this.offer))
  formData.append("OfferDetail",JSON.stringify(this.offerdetail))
  formData.append("ChatId",JSON.stringify(id))
  formData.append("ReciverId",JSON.stringify(reciverid))
  this.chatservice.sendmessgae(formData).subscribe((next:any)=>{
    this.textmessage.nativeElement.value="";
this.newsendingmessage={"message":this.chatmessages.Message,"recieverid":this.message[0].senderId,"senderId":this.message[0].recieverid,"chatId":this.message[0].chatId}
this.message.push(this.newsendingmessage);



  })
}
ngAfterViewInit() {
  this.commentDivs.changes.subscribe(() => {
    if (this.commentDivs && this.commentDivs.last) {
      this.commentDivs.last.nativeElement.focus();
    }
  });
  this.Pagedown.changes.subscribe(() => {
    if (this.Pagedown && this.Pagedown.last) {
      this.Pagedown.last.nativeElement.focus();
    }
  });
}
createoffer(){
  debugger;
   var  Offerdata={"BuyerId":this.buyerid,"GigId":this.gigid,"NumberOfRevision":Number(this.revesion),"DeliveryDays":Number(this.DeliveryTime),"OfferFrom":"Seler","TotalOfferAmount":this.price}
   var obj={"offer":Offerdata,}


   var formData: any = new FormData();
   this.chatmessages.ChatId=this.chatid;
  
   var data=this.chat.filter(x=>x.chatId==this.chatid);
  var reciverid=0;
  if(data[0].recieverId==this.userid){
    reciverid=data[0].senderId;
  }
  else{
    reciverid=data[0].recieverId;
  }
  this.chatmessages.recieverid=reciverid;
  this.chatmessages.MessageType="Offer";
    this.chatmessages.Message=this.textmessage.nativeElement.value;
    formData.append("ChatMessage",JSON.stringify(this.chatmessages))
    formData.append("offer",JSON.stringify(Offerdata))
    formData.append("OfferDetail",JSON.stringify(this.offerdetail))
    formData.append("ChatId",JSON.stringify(this.chatid))
    formData.append("ReciverId",JSON.stringify(reciverid))
    this.chatservice.sendmessgae(formData).subscribe((next:any)=>{
      this.textmessage.nativeElement.value="";
  this.newsendingmessage={"message":this.chatmessages.Message,"recieverid":this.message[0].senderId,"senderId":this.message[0].recieverid,"chatId":this.message[0].chatId}
  this.message.push(this.newsendingmessage);
  this.modalService.dismissAll();
  this.Desciption="";
  this.gigid="";
  this.buyerid="";
  this.DeliveryTime="";
  this.price="";
  this.revesion="";

                  })


  
   
}
OfferModal(content){
  this.gigservice.GetUserGigs().subscribe((next:any)=>{
    this.gig=next.res;
    console.log(this.gig);
    console.log(next)
        },error=>{
          console.log(error)
        })
  this.modalService.open(content, {size: 'lg', centered: true })
}
}
