import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlService } from './url.service';


@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css'],
})

export class UrlComponent {
  shortUrl: string;
  shortUrlCode: string;
  errorMessage: string[] = [];

  constructor(
    private urlService: UrlService
  ) { }

  onSubmit(userUrlForm: NgForm) {
    this.errorMessage = [];
    this.urlService.shortenUrl(userUrlForm.value.userUrl).subscribe((response: any) => {
      this.shortUrl = response.shortUrl;
      this.shortUrlCode = response.urlCode;
    },
    error => this.setErrorMessage(error)
    );
    userUrlForm.reset();
  }

  redirectToLong(code: string) {
    this.errorMessage = [];
    this.urlService.redirectToUrl(code).subscribe((response: any) => {
      window.location.href = response.longUrl;
    },
      error => this.setErrorMessage(error)
    );
  }
  setErrorMessage(error: any){
    error.error.message ? this.errorMessage = error.error.message.message : this.errorMessage.push("Cannot reach the server"); 
  }
}




