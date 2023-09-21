import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { CommonService } from '../../services/common.service';
import { ToastrService } from 'ngx-toastr';
declare var AOS: any;
@Component({
  selector: 'app-post-comment2',
  templateUrl: './post-comment2.component.html',
  styleUrls: ['./post-comment2.component.css']
})

export class PostComment2Component implements OnInit {
  contactmail:FormGroup;
  submitted=false;
  formdata:[];
  constructor(private formBuilder:FormBuilder, private commonService:CommonService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.contactmail=this.formBuilder.group({
      message:['', Validators.required],
      name:['',Validators.required],
      phone_number:['',  [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
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



}


