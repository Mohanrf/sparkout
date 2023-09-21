import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { CommonService } from '../services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';
declare var AOS: any;

@Component({
  selector: 'app-lets-talk',
  templateUrl: './lets-talk.component.html',
  styleUrls: ['./lets-talk.component.css']
})
export class LetsTalkComponent implements OnInit {

  title = '';

  contactmail:FormGroup;
  submitted=false;
  countryCode: any;
  country_code:any;
  formdata:[];
  constructor(
    private formBuilder:FormBuilder,
    private commonService:CommonService,
    private toastr:ToastrService,
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }
  ngOnInit(): void {
    this.contactmail=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone_number:['',  [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      skype_id:['',Validators.required],
      message:['', Validators.required],
    });

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: '' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: '' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ property: 'og:description', content: '' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: '' });
    this.meta.updateTag({ name: 'twitter:description', content: '' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/");

  }
  blogPost: OwlOptions = {
    loop: true,
    margin:50,
    autoplay:true,
    center: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    },

  }
  //easy to access form control value
  get f(){
    return this.contactmail.controls;
  }

  public onSubmit(){
    this.submitted=true;
    if(this.contactmail.valid){
      let formdata= {... this.contactmail.value, country_code:this.countryCode};
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

  onCountryChange(country: any)
  {
    this.countryCode = country.dialCode;
  }

}

