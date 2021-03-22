import { Experienceleve } from '../../../Models/Experiencelevel';
import { Categorey } from '../../../Models/categorey';
import { Subcategorey } from '../../../Models/subcategorey';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { HttpEvent } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { CategoriesDto } from 'src/app/Models/CategoriesDto';
import { CategoreyserviceService } from 'src/app/_services/categoreyservice.service';
import { FileuploadService } from 'src/app/_services/fileupload.service';
import { SellerInfoService } from 'src/app/_services/SellerInfo.service';
import { A } from '@angular/cdk/keycodes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-SellerRegisteration',
  templateUrl: './SellerRegisteration.component.html',
  styleUrls: ['./SellerRegisteration.component.scss']
})
// class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }
export class SellerRegisterationComponent implements OnInit {
  isLinear = false;
  todate:Date;
  fromdate:Date;
  imageuploaded:any;
  categoriesList:CategoriesDto[];
  ExperienceLevels:any;
  SubcategoriesList:Subcategorey[];
   Sellerskills:any[]=[];
   SellersEducation:any[]=[];
   SellerCertificates:any[]=[];
  firstFormGroup: FormGroup;
  SellerProfession:any[];
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fristname:string;
  categoreyId:number;
  lastname:string;
  catandsubcat:any;
  form: FormGroup;
  subcat:any;
  Language:any;
  categorey:any={}
  @ViewChild('stepper',{static:false}) private myStepper: MatStepper;
  @ViewChild('Language',{static:false}) private language: ElementRef;
  @ViewChild('select',{static:false}) private selectedval: ElementRef;
  @ViewChild('to',{static:false}) private toyear: ElementRef;
  @ViewChild('from',{static:false}) private fromyear: ElementRef;
  @ViewChild('skillname',{static:false}) private skillname: ElementRef;
  @ViewChild('skilllevel',{static:false}) private skilllevel: ElementRef;
  @ViewChild('degreename',{static:false}) private degreename: ElementRef;
  @ViewChild('degreeyear',{static:false}) private degreeyear: ElementRef;
  @ViewChild('Country',{static:false}) private Country: ElementRef;
  @ViewChild('Institute',{static:false}) private Institute: ElementRef;
  @ViewChild('Major',{static:false}) private Major: ElementRef;
  @ViewChild('certificatename',{static:false}) private certificatename: ElementRef;
  @ViewChild('certificateyear',{static:false}) private certificateyear: ElementRef;
  @ViewChild('CertifiedFrom',{static:false}) private CertifiedFrom: ElementRef;
  @ViewChild('website',{static:false}) private website: ElementRef;
  // selectedFile: ImageSnippet;
  DisplayLanguageInput:boolean=false;
  DisplaySkillinput:boolean=false;
  DisplayEducationinput:boolean=false;
  DisplayCertificateinput:boolean=false;
  imagebaseurl1=environment.imagepath+"/UserProfileImages/";
  constructor(private _formBuilder: FormBuilder, private fb:FormBuilder,private fileuploadservice:FileuploadService,private sellerservice:SellerInfoService ,private catservice:CategoreyserviceService ) {

   }
   SellerOccupationSkills: Array<any> = [
               
     
   ];
 
  SellerPersonalInfo:FormGroup=new FormGroup({
 
    FullName: new FormControl(""),
    Firstname: new FormControl(""),
    LastName: new FormControl(""),
  
    
    Description: new FormControl(""),
  
  
   });
   SellerProfessionform:FormGroup=new FormGroup({
 
    subCategoreyId: new FormControl(0),
    categoreyId: new FormControl(0),
    subcategoreyName:new FormControl(""),
  
  
   });
   SellerOccupationform:FormGroup=new FormGroup({
    categoreyId:new FormControl(0),
    FromYear:new FormControl(Date),
    ToYear:new FormControl(Date),

   });
   SallerSkillForm:FormGroup=new FormGroup({
    SkillName:new FormControl(0),
    Explevel:new FormControl(0),

   })
   findcategory(Id:any)
   {
   
debugger;
var data=this.categoriesList.filter(x=>x.categorey.categoreyId==Id);
this.categorey={"CategoreyId":data[0].categorey.categoreyId};
this.SubcategoriesList=data[0].subcategorey;

console.log(data);

   }
   activateseller(){
    this.sellerservice.Activateseller().subscribe((next:any)=>{

    },error=>{
      console.log(error)
    })
  }
   onCheckboxChange(e,subCategoreyId:number) {

  debugger;
   if(e.target.checked)
   {
     var obj={"SubCategoreyId":subCategoreyId}
this.SellerOccupationSkills.push(obj)
   }else {
    let index = this.SellerOccupationSkills.indexOf(x=>x.SubCategoreyId==subCategoreyId);
    this.SellerOccupationSkills.splice(index,1);
  }
  console.log(this.SellerOccupationSkills.values);

  }

  ngOnInit() {
 
  this.catservice.Getcatandsubcat().subscribe((next:any)=>{
this.catandsubcat=next;
this.Getcategories();
    },error=>{

    })
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
    this.form = this.fb.group({
    
      avatar: [null]
    })
  }
  DisplayLanguage()
  {
    debugger;
    this.DisplayLanguageInput=!this.DisplayLanguageInput;

  }
  DisplaySkills()
  {
    debugger;
    this.GetExperienceLevels();
    this.DisplaySkillinput=!this.DisplaySkillinput;

  }
  DisplayEducation()
  {
    debugger;

    this.DisplayEducationinput=!this.DisplayEducationinput;

  }
  DisplayCertificates()
  {
    debugger;
   
    this.DisplayCertificateinput=!this.DisplayCertificateinput;

  }
  SaveInfo(){

    var ful= this.SellerPersonalInfo.get('Firstname').value ;
var last=this.SellerPersonalInfo.get('LastName').value;
var fulname=ful+last;
    this.SellerPersonalInfo.get('FullName').patchValue(fulname);
  this.sellerservice.PostSellerPersonalInfo(this.SellerPersonalInfo.value).subscribe((next:any)=>{
    debugger
this.myStepper.next();
  },error=>{

  }
  )

  }

  Saveskill(){
    debugger;
    var Skills={"SkillName":this.skillname.nativeElement.value,"ExperienceLevelId":Number(this.skilllevel.nativeElement.value)}
    this.skillname.nativeElement.value="";
    this.skilllevel.nativeElement.value="";

this.Sellerskills.push(Skills)
    
console.log(this.Sellerskills)
    
  }
  SaveEducation(){
    debugger;
   

    var Education={"Country":this.Country.nativeElement.value,"Institute":this.Institute.nativeElement.value,"Major":this.Major.nativeElement.value,"Degree":this.degreename.nativeElement.value,"Year":(this.degreeyear.nativeElement.value, new Date())}
    this.degreename.nativeElement.value="";
    this.degreeyear.nativeElement.value="";
this.SellersEducation.push(Education)
    
console.log(this.SellersEducation)
    
  }
  Savecertificates(){
    debugger;
    var certificates={"CertifiedFrom":this.CertifiedFrom.nativeElement.value,"CertificateName":this.certificatename.nativeElement.value,"Year":(this.certificateyear.nativeElement.value, new Date())}
    this.certificatename.nativeElement.value="";
    this.certificateyear.nativeElement.value="";
this.SellerCertificates.push(certificates)
    
console.log(this.SellersEducation)
    
  }
  savelanguage(){
    debugger;
  var lang={"Language":this.language.nativeElement.value,"Level":this.selectedval.nativeElement.value}
  this.sellerservice.PostSellerLanguage(lang).subscribe((next:any)=>{
    this.language.nativeElement.value="";
    this.DisplayLanguage();
  },error=>{

  }
  )
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

  }
  GetExperienceLevels()
  {

debugger;
    this.sellerservice.ExpLevels().subscribe((next:any) => {
      this.ExperienceLevels=[];
      this.ExperienceLevels=next.res;
      
      console.log(this.ExperienceLevels)
    }, error => {
      console.log(error);
    });

  }


  

  getImage(event) {
    debugger;
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity();
    if(this.form.value.avatar!=null){
      var apipath="UploadImageBrand";
      this.imageuploaded=""
      this.fileuploadservice.uploadprofileimage(this.form.value.avatar).subscribe((event: HttpEvent<any>) => {
        this.imageuploaded=file.name;
      })
    }
 
    // this.fileuploadservice.uploadprofileimage(this.form.value.avatar).subscribe((next:any)=>{
    //   console.log(next);
    // })
 }
 saveprofessionalinfo(){

   var website=this.website.nativeElement.value
    debugger;

   var ff={ToYear:this.toyear.nativeElement.value,FromYear:this.fromyear.nativeElement.value}
   var h=Object.assign(this.categorey, ff);
  var obj={ "SellerOccupationDtos":[{"SellerOccupation":h,"SellerOccupationSkills":this.SellerOccupationSkills}],
        "SellerSkils":this.Sellerskills,"SellerEducations":this.SellersEducation,"Certifications":this.SellerCertificates,"website":website
};

console.log(obj)

  this.sellerservice.PostSellerProffessionalInfo(obj).subscribe((next:any)=>{

  },error=>{
    debugger;
console.log(error.error);

  }
  )
}
}
