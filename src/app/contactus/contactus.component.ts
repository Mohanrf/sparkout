import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { CommonService } from '../services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

declare var AOS: any;
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit, AfterViewInit {
  @ViewChild('crmForm', { static: false }) div1: ElementRef;
  title = 'Any queries, reach out to Sparkout Tech - Contact us';

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
    private canonicalService: CanonicalService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.contactmail=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone_number:['',  [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      skype_id:['',Validators.required],
      message:['', Validators.required],
    });

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Get in touch with us for all your staffing requirements and hire our optimal services for getting the project development done within your estimated budget. We believe in building business relationships that go a long way.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact us, contact us Email, contact sparkout tech solutions' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Any queries, reach out to Sparkout Tech - Contact us' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/contact-us/' });
    this.meta.updateTag({ property: 'og:description', content: 'Get in touch with us for all your staffing requirements and hire our optimal services for getting the project development done within your estimated budget. We believe in building business relationships that go a long way.' });
    this.meta.updateTag({ property: 'og:type', content: 'Get in touch with us for all your staffing requirements and hire our optimal services for getting the project development done within your estimated budget. We believe in building business relationships that go a long way.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Any queries, reach out to Sparkout Tech - Contact us' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Get in touch with us for all your staffing requirements and hire our optimal services for getting the project development done within your estimated budget. We believe in building business relationships that go a long way.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/contact-us/");


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
    }
  }


  officeOptions: OwlOptions = {
    loop: true,
    margin:10,
    autoplay:true,
    center: false,
    dots: false,
    items:1,
    slideTransition: 'linear',
    smartSpeed: 3000,
    //autoplayTimeout: 0,
    //autoplaySpeed: 10000,
    //autoplayHoverPause:true,
    autoWidth:true,
    autoHeight:true,
  }
  officeOptions2: OwlOptions = {
    loop: true,
    margin:10,
    autoplay:true,
    center: false,
    dots: false,
    items:1,
    slideTransition: 'linear',
    smartSpeed: 3000,
    //autoplayTimeout: 0,
    //autoplaySpeed: 10000,
    //autoplayHoverPause:true,
    autoWidth:true,
    autoHeight:true,
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

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = `https://formcrm.sparkouttech.com/admin/web-forms/forms/jwr3d2sLJFE8cDQGdbfdaKJnsbGWYKLyaaGivTjCWqbAgqFeZY/form.js`;
    this.renderer.appendChild(this.div1?.nativeElement, script);
    // this.renderer.insertBefore(document.body, script,this.div1.nativeElement);
  }

}
