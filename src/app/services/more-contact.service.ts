import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoreContactService {
  private Base_url=environment.Base_url;
  constructor(private http:HttpClient) { }
    morecontact(maildata:any){
    return this.http.post(`${this.Base_url}sparkout_mail/public/api/send-mail`, maildata);
  }
}
