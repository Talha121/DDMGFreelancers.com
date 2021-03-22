import { GigserviceService } from 'src/app/_services/gigservice.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes'; 
import { MatChipInputEvent, MatStepper} from '@angular/material';
import { SellerInfoService } from 'src/app/_services/SellerInfo.service';
import { CategoriesDto } from 'src/app/Models/CategoriesDto';
import { Subcategorey } from 'src/app/Models/subcategorey';
@Component({
  selector: 'app-newgig',
  templateUrl: './newgig.component.html',
  styleUrls: ['./newgig.component.scss']
})
export class NewgigComponent implements OnInit {
  categoriesList:CategoriesDto[];
  SubcategoriesList:Subcategorey[];
  categorey:any={}
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  SixFormGroup:FormGroup;
  DisplayLanguageInput:boolean=false;
  ShowFaq:boolean=false;
  aboutgig:boolean=false;
  ifgigIdnull:boolean=true;
  gigId:number;
  myvide:any;
  gigtype:boolean=false;
  @ViewChild('stepper',{static:false}) private myStepper: MatStepper;
  @ViewChild('Title',{static:false}) private Title: ElementRef;
  @ViewChild('CategoreyId',{static:false}) private CategoreyId: ElementRef;
  @ViewChild('SubcategoreyId',{static:false}) private SubcategoreyId: ElementRef;
  @ViewChild('vid',{static:false}) private vid: ElementRef;

  @ViewChild('PackageName',{static:false}) private PackageName: ElementRef;
  @ViewChild('Description',{static:false}) private Description: ElementRef;
  @ViewChild('DeliveryTime',{static:false}) private DeliveryTime: ElementRef;
  @ViewChild('Revision',{static:false}) private Revision: ElementRef;
  @ViewChild('ProjectFile',{static:false}) private ProjectFile: ElementRef;
  @ViewChild('Price',{static:false}) private Price: ElementRef;
  @ViewChild('GigId',{static:false}) private GigId: ElementRef;

  @ViewChild('PackageName1',{static:false}) private PackageName1: ElementRef;
  @ViewChild('Description1',{static:false}) private Description1: ElementRef;
  @ViewChild('DeliveryTime1',{static:false}) private DeliveryTime1: ElementRef;
  @ViewChild('Revision1',{static:false}) private Revision1: ElementRef;
  @ViewChild('ProjectFile1',{static:false}) private ProjectFile1: ElementRef;
  @ViewChild('Price1',{static:false}) private Price1: ElementRef;
  @ViewChild('GigId1',{static:false}) private GigId1: ElementRef;

  @ViewChild('PackageName2',{static:false}) private PackageName2: ElementRef;
  @ViewChild('Description2',{static:false}) private Description2: ElementRef;
  @ViewChild('DeliveryTime2',{static:false}) private DeliveryTime2: ElementRef;
  @ViewChild('Revision2',{static:false}) private Revision2: ElementRef;
  @ViewChild('ProjectFile2',{static:false}) private ProjectFile2: ElementRef;
  @ViewChild('Price2',{static:false}) private Price2: ElementRef;
  @ViewChild('GigId2',{static:false}) private GigId2: ElementRef;

  @ViewChild('gigDescription',{static:false}) private gigDescription: ElementRef;
  @ViewChild('gigQuestion',{static:false}) private gigQuestion: ElementRef;

  GigQuestions: Array<any> = [
               
     
  ];



  constructor(private _formBuilder: FormBuilder,private sellerservice:SellerInfoService,private gigservice:GigserviceService) { }

  ngOnInit() {

    if(this.ifgigIdnull==null)
    {
      this.ifgigIdnull=true;
    }
    this.Getcategories();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.SixFormGroup = this._formBuilder.group({
      sixCtrl: ['', Validators.required]
    });
  }/*Set the values of these properties 
    to use them in the HTML view.*/
  visibalFaq()
  {
    this.ShowFaq=!this.ShowFaq;
  }
  visible = true; 
  selectable = true; 
  removable = true; 
    
/*set the separator keys.*/
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA]; 
  
/*create the tags list.*/
  
  Tags: any[] = []; 
    
/*our custom add method which will take 
    matChipInputTokenEnd event as input.*/
  add(event: MatChipInputEvent): void { 
  
/*we will store the input and value in local variables.*/
  
    const input = event.input; 
    const value = event.value; 
  
    if ((value || '').trim()) { 
      
 /*the input string will be pushed to the tag list.*/
 var obj={"Tag":value}
      this.Tags.push(obj); 
    } 
  
    if (input) { 
  
/*after storing the input we will clear the input field.*/
  
      input.value = ''; 
    } 
  } 
  


/*custom method to remove a tag.*/
  
  remove(tag: string): void { 
    const index = this.Tags.indexOf(tag); 
  
    if (index >= 0)  
    { 
  
/*the tag of a particular index is removed from the tag list.*/
  
      this.Tags.splice(index, 1); 
    } 
  }

  Videos: File[] = [];

  onvideoSelect(event) {
    this.Videos.splice(this.Videos.indexOf(event), 1);
    this.Videos.push(...event.addedFiles);
    this.vid=event.addedFiles;
    const formData = new FormData();
  
    for (var i = 0; i < this.Videos.length; i++) { 
      formData.append("Video[]", this.Videos[i]);
    }
  }
  onVideoRemove(event) {
    console.log(event);
    this.Videos.splice(this.Videos.indexOf(event), 1);
  }


  files: File[] = [];

onSelect(event) {
  
  this.files.push(...event.addedFiles);
  

  // for (var i = 0; i < this.files.length; i++) { 
  //   formData.append("file[]", this.files[i]);
  // }

}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

audiofiles: File[] = [];

onaudioSelect(event) {
  
  this.audiofiles.push(...event.addedFiles);
  
  const formData = new FormData();

  for (var i = 0; i < this.audiofiles.length; i++) { 
    formData.append("audiofile[]", this.audiofiles[i]);
  }
}

onaudioRemove(event) {
  console.log(event);
  this.audiofiles.splice(this.audiofiles.indexOf(event), 1);
}



pdffiles: File[] = [];

onpdfSelect(event) {
  
  this.pdffiles.push(...event.addedFiles);
  
  const formData = new FormData();

  for (var i = 0; i < this.pdffiles.length; i++) { 
    formData.append("pdffiles[]", this.pdffiles[i]);
  }
}

onpdfRemove(event) {
  console.log(event);
  this.pdffiles.splice(this.pdffiles.indexOf(event), 1);
}


Gigcreateform:FormGroup=new FormGroup({
  categoreyId:new FormControl(0),
  gigId:new FormControl(0),
  subCategoreyId:new FormControl(0),
  sellerProfileId:new FormControl(0),
  title:new FormControl(""),
 });

 counter()
 {

  
 }

Addgig()
{
  debugger;
  var data=this.Gigcreateform.value;
}
Getcategories()
{

debugger;
  this.sellerservice.Getcategories().subscribe((next:any) => {
    this.categoriesList=[];
    this.categoriesList=next;
    
    console.log(this.categoriesList)
  }, error => {
    console.log(error);
  });

}
GetSubcategory()
{

debugger;
  this.sellerservice.GetSubcategories().subscribe((next:any) => {
    this.SubcategoriesList=[];
    this.SubcategoriesList=next;
    
    console.log(this.SubcategoriesList)
  }, error => {
    console.log(error);
  });


};
SaveGigoverview()
{
  debugger;

  var gigdata={"Title":this.Title.nativeElement.value,"CategoreyId":Number(this.CategoreyId.nativeElement.value),"SubcategoreyId":Number(this.SubcategoreyId.nativeElement.value)}
 // var obj={"Gig":gigdata}
  var obj={"Gig":gigdata,"tags":this.Tags}
  this.gigservice.PostGig(obj).subscribe((next:any)=>{
   debugger;
    if(next.res!=null)
    {
    localStorage.setItem('gigpostid', next.res);

    this.gigId=Number(localStorage.getItem('gigpostid'));
      this.myStepper.next();
      this.isLinear =false;

      this.ifgigIdnull=true;
    }
    console.log(this.gigId)
  },error=>{
    debugger;
console.log(error.error);

  }
  )
  console.log(obj)
};
SaveGigDescription()
{
  debugger;
  this.gigId=Number(localStorage.getItem('gigpostid'));
  var gigdata={"Description":this.gigDescription.nativeElement.value,"GigId":this.gigId}
  this.gigservice.PostGigDescription(gigdata).subscribe((next:any)=>{
    this.myStepper.next();
      this.ifgigIdnull=true;
  },error=>{
    debugger;
console.log(error.error);
  }
  )

};

AddQuestion() {
debugger;
this.gigId=Number(localStorage.getItem('gigpostid'));
var Questionobj={"Question":this.gigQuestion.nativeElement.value,"GigId":this.gigId}
this.GigQuestions.push(Questionobj)
this.gigQuestion.nativeElement.value="";
var data=this.GigQuestions;
  }

SaveQuestion()
{
  this.gigId=Number(localStorage.getItem('gigpostid'));
  var gigdata={"Questions":this.GigQuestions,"GigId":this.gigId}
  this.gigservice.PostGigQuestions(gigdata).subscribe((next:any)=>{
    this.myStepper.next();
      this.ifgigIdnull=true;
 
  },error=>{
    debugger;
console.log(error.error);
  }
  )
}
SaveGallery()
{
  debugger;
  
  this.gigId=Number(localStorage.getItem('gigpostid'));
  this.myvide=this.Videos[0];
  var gigdata={ "gigid":this.gigId,"VideoFile":this.myvide,"AudioFile":this.audiofiles,"Images":this.files,"Pdfs":this.pdffiles}
  
  debugger;
  this.gigservice.PostGigGallery(gigdata).subscribe((next:any)=>{
    this.myStepper.next();
      this.ifgigIdnull=true;
   
  },error=>{
    debugger;
console.log(error.error);
  }
  )
}


Savegigpackages()
{
  debugger;
  var basicPackage={"PackageName":this.PackageName.nativeElement.value,"Description":this.Description.nativeElement.value,"DeliveryTime":this.DeliveryTime.nativeElement.value,"Revision":Number(this.Revision.nativeElement.value),"ProjectFile":Boolean(this.ProjectFile.nativeElement.value),"Price":Number(this.Price.nativeElement.value),"GigId":this.gigId}
  var StanderedPackage={"PackageName":this.PackageName1.nativeElement.value,"Description":this.Description1.nativeElement.value,"DeliveryTime":this.DeliveryTime1.nativeElement.value,"Revision":Number(this.Revision1.nativeElement.value),"ProjectFile":Boolean(this.ProjectFile1.nativeElement.value),"Price":Number(this.Price1.nativeElement.value),"GigId":this.gigId}
  var premiumPackage={"PackageName":this.PackageName2.nativeElement.value,"Description":this.Description2.nativeElement.value,"DeliveryTime":this.DeliveryTime2.nativeElement.value,"Revision":Number(this.Revision2.nativeElement.value),"ProjectFile":Boolean(this.ProjectFile2.nativeElement.value),"Price":Number(this.Price2.nativeElement.value),"GigId":this.gigId}
  
   var packageobj={"basicPackage":basicPackage,"GigStandardPackage":StanderedPackage,"GigPremiumPackage":premiumPackage}
  
   console.log(packageobj)
  this.gigservice.PostGigPackages(packageobj).subscribe((next:any)=>{
    this.myStepper.next();
      this.ifgigIdnull=true;
  },error=>{
    debugger;
console.log(error.error);

  }
  )

};


findcategory(Id:any)
{

debugger;
var data=this.categoriesList.filter(x=>x.categorey.categoreyId==Id);
this.categorey={"CategoreyId":data[0].categorey.categoreyId};
this.SubcategoriesList=data[0].subcategorey;

console.log(data);

}



}
