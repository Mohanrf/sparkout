import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { CommonService } from '../../services/common.service';
import { ToastrService } from 'ngx-toastr';
declare var AOS: any;
@Component({
  selector: 'app-career-form',
  templateUrl: './career-form.component.html',
  styleUrls: ['./career-form.component.css']
})

export class CareerFormComponent implements OnInit, AfterViewInit  {
  @ViewChild('crmForm', { static: false }) div1: ElementRef;

  contactmail:FormGroup;
  submitted=false;
  countryCode: any;
  country_code:any;
  formdata:[];
  constructor(private formBuilder:FormBuilder, private commonService:CommonService,
    private toastr:ToastrService,
    private renderer: Renderer2) { }
  ngOnInit(): void {
    this.contactmail=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone_number:['',  [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      resume:['',Validators.required],
      message:['', Validators.required],
    });

  }

  //easy to access form control value
  get f(){
    return this.contactmail.controls;
  }

  public onSubmit(){
    this.submitted=true;
    if(this.contactmail.valid){
      let formdata= {... this.contactmail.value};
      console.log(formdata);
      this.commonService.submitcontactform(formdata).subscribe((response:any)=>{
        this.submitted = false;
        if(response.status=['SUCCESS']){
          this.toastr.success('Mail Send Successfully!', 'Success!');
          this.contactmail.reset();
        }
      },
      (exception:any) =>{
        this.toastr.error('Mail Not Send Pls try again after some times!', 'Failure!');
      }
      )
    }
  }
  numericOnly(event:any) {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = `https://formcrm.sparkouttech.com/admin/web-forms/forms/KELmbMZR1gz3JleL834IakQM1o2IJdh3yxZLbllMNQrzagU9xo/form.js`;
    this.renderer.appendChild(this.div1?.nativeElement, script);
    // this.renderer.insertBefore(document.body, script,this.div1.nativeElement);
  }

}

