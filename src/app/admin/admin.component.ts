import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminData: any[] = [];
  errorMessage: string;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getAdminData().subscribe((response: any) => {
      this.adminData = response;
    },
      error => typeof(error.error) === "string"? this.errorMessage = error.error : this.errorMessage = "Cannot reach the server"
    )
  }

}
