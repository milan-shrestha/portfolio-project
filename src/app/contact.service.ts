import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://formsubmit.co/65401d59935c2baacc61b10aca3bcfc8';

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if(response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
