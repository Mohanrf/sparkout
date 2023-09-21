import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MoreContactService } from 'src/app/services/more-contact.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-contact',
  templateUrl: './blog-contact.component.html',
  styleUrls: ['./blog-contact.component.css']
})
export class BlogContactComponent implements OnInit, AfterViewInit  {
  @ViewChild('crmForm', { static: false }) div1: ElementRef;
  contactmail:FormGroup;
  submitted=false;
  countryCode: any;
  country_code:any;
  formdata:[];
  obj: any;
  constructor(private formBuilder:FormBuilder,
    private commonServices:MoreContactService,
    private toast:ToastrService,
    private renderer: Renderer2) { }
  ngOnInit(): void {
    this.contactmail=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone_number:['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      skype_id:['',Validators.required],
      message:['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = `https://formcrm.sparkouttech.com/admin/web-forms/forms/jwr3d2sLJFE8cDQGdbfdaKJnsbGWYKLyaaGivTjCWqbAgqFeZY/form.js`;
    this.renderer.appendChild(this.div1?.nativeElement, script);
    // this.renderer.insertBefore(document.body, script,this.div1.nativeElement);
  }

  //easy to access form control value
  get f(){
    return this.contactmail.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.contactmail.valid){
      let formdata= {... this.contactmail.value, country_code:this.countryCode};
      console.log(formdata);
      this.commonServices.morecontact(formdata).subscribe((response:any)=>{
        this.submitted=false;
        if(response.status=['SUCCESS']){
          this.toast.success('Mail Send Successfully!', 'Success!');
          this.contactmail.reset();
        }
      },
      (excption:any)=>{
        this.toast.error('Mail Not Send Pls try again after some times!', 'Failure!');
      }
      )};
  }
  onCountryChange(country: any)
  {
    this.countryCode = country.dialCode;
  }
  numericOnly(event:any){
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

}
