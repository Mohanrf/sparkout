
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { CommonService } from '../services/common.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';



declare var AOS: any;
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],

})



export class ContactFormComponent implements OnInit, AfterViewInit {
  @ViewChild('crmForm', { static: false }) div1: ElementRef;
  // public contactmail!: FormGroup;
  submitted=false;
  // countryCode: any;
  // country_code:any;
  // formdata=[];
  form!:FormGroup

  constructor(private formBuilder:FormBuilder,
    private commonService:CommonService,
    private toastr:ToastrService,
    public http:HttpClient,
    private renderer: Renderer2)  {}

  ngOnInit(): void {
    // this.contactmail=this.formBuilder.group({
    //   name:['',[Validators.required]],
    //   email:['',[Validators.required,Validators.email]],
    //   phone_number:['',  [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    //   skype_id:['',[Validators.required]],
    //   description:['', [Validators.required]],
    // });

    this.form = this.formBuilder.group({
      Last_Name:['',[Validators.required]],
      Email:[''],
      Phone:[''],
      Country:[''],
      Description:[''],
    })



  }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = `https://formcrm.sparkouttech.com/admin/web-forms/forms/jwr3d2sLJFE8cDQGdbfdaKJnsbGWYKLyaaGivTjCWqbAgqFeZY/form.js`;
    this.renderer.appendChild(this.div1?.nativeElement, script);
    this.renderer.insertBefore(document.body, script,this.div1.nativeElement);
  }

  //easy to access form control value

  // get f(){
  //   return this.contactmail.controls;
  // }

  //easy to access form control value
  get formControlls(){
    return this.form.controls;
  }

  // public onSubmit(){
  //   this.submitted=true;
  //   if(this.contactmail.valid){
  //     let formdata= {... this.contactmail.value, country_code:this.countryCode};
  //     console.log(formdata);
  //     this.commonService.submitcontactform(formdata).subscribe((response:any)=>{
  //       this.submitted = false;
  //       if(response.status=['SUCCESS']){
  //         this.toastr.success('Mail Send Successfully!', 'Success!');
  //         this.contactmail.reset();
  //       }
  //     },
  //     (exception:any) =>{
  //       this.toastr.error('Mail Not Send Pls try again after some times!', 'Failure!');
  //     }
  //     )
  //   }
  // }

  // numericOnly(event:any) {
  //   let patt = /^([0-9])$/;
  //   let result = patt.test(event.key);
  //   return result;
  // }

  // onCountryChange(country: any)
  // {
  //   this.countryCode = country.dialCode;
  // }


  public formSubmit(){
    console.log('form submitted');
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    // const { name, email, phone, skybe_id, description } = this.form.controls;
    // const formData = new FormData();
    // formData.append('xnQsjsdp','9c5f03d3584d5f5d235381b7affd44f55478fd35ea7e734cc1e3f04e84058d09');
    // formData.append('zc_gad','');
    // formData.append('xmIwtLD','3fb1343a6196a5912a5bd9fac1fd0138ed9a0d91444ca98f5a7e055f878f2bb1');
    // formData.append('actionType','TGVhZHM=');
    // formData.append('returnURL','https://www.sparkouttech.com/');
    // formData.append('Name',name.value);
    // formData.append('Email',email.value);
    // formData.append('Phone',phone.value);
    // formData.append('Skype ID',skybe_id.value);
    // formData.append('Description',description.value);
this.http.post('https://crm.zoho.com/crm/WebToLeadForm',this.form.value , {responseType: "text"}).subscribe((response:any) => {
  if (response) {
    window.location.href='https://www.sparkouttech.com/';

  } else {
    alert('failed');
  }
})
  }

}
