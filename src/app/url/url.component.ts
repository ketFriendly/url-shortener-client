import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlService } from './url.service';


@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css'],

})
    
export class UrlComponent implements OnInit {
  shortUrl:string;
  shortUrlCode:string;
  errorMessage:string;
  constructor(
    private urlService: UrlService
  ){

  }
  
  ngOnInit(){}

  onSubmit(userUrlForm: NgForm) {
    this.urlService.shortenUrl(userUrlForm.value.userUrl).subscribe((response: any)=> {
      this.shortUrl =  response.shortUrl;
      this.shortUrlCode = response.urlCode;
    },
      error => this.errorMessage = error.error
    );
    userUrlForm.reset();
  }

  redirectToLong(code: string) {
    this.urlService.redirectToUrl(code).subscribe((response:any)=>{
      window.location.href = response.longUrl;
    },
      error => this.errorMessage = error.error
    );
  }
}




