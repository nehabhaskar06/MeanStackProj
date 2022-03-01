import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
mobNumberLogin:any;
paaswordLogin:any;
  constructor(private router: Router,private service: UserServiceService) { }

  ngOnInit(): void {
 
  }

  Register(){
    if(!(this.mobNumberLogin)){
alert('Please enter Mobile Number');
    }else if(!(this.paaswordLogin)){
alert('Please enter paasword')
    }else{
      this.router.navigate(['../Register'])
    }
  
  
  }

  SignInUser(){
    if(!(this.mobNumberLogin)){
      alert('Please enter Mobile Number');
          }else if(!(this.paaswordLogin)){
      alert('Please enter paasword')
          }else{
                    
    this.router.navigateByUrl('/User'); 
    this.service.loginNumber=this.mobNumberLogin;
          }

  }

  
  SignInAdmin(){
    this.router.navigateByUrl('/Admin'); 
  }
}
