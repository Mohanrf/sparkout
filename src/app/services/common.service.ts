import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private Base_url=environment.Base_url
  constructor(private http:HttpClient) { }
  submitcontactform(mail_data:any){
      return this.http.post(`${this.Base_url}sparkout_mail/public/api/send-mail`, mail_data);
  }

}
