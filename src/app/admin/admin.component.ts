import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminData: any;
  errorMessage: string[] = [];;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getAdminData().subscribe((response: any) => {
      this.adminData = response;
    },
      error => error.error.message ? this.errorMessage = error.error.message : this.errorMessage.push("Cannot reach the server")
    )
  }

}
