import { Component, OnInit } from '@angular/core';
import{User} from '../shared/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data: any;

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.refreshUser();
  }

  refreshUser(){
    this.service.getAlluser().subscribe((res)=>{
      this.data=res as User[];
      if(!(this.data &&this.data.length)){
  
        alert('No Record found! Kindly Register');
      }
       
    })
  }
}
