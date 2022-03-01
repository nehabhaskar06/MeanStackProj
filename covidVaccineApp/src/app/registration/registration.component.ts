import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  myForm: FormGroup;

   
  
    constructor(private fb: FormBuilder, private service: UserServiceService, private router:Router) {
      this.myForm = new FormGroup({
        name:  new FormControl(''),
  age:  new FormControl(''),
  gender:  new FormControl(''),
  address:  new FormControl(''),
  mobnumber:  new FormControl(''),
  email:  new FormControl(''),
  paasword:  new FormControl(''),
});
  
  
     }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name:  new FormControl(''),
      age:  new FormControl(''),
      gender:  new FormControl(''),
      address:  new FormControl(''),
      mobnumber:  new FormControl(''),
      email:  new FormControl(''),
      paasword:  new FormControl(''),
    });

  }

  Cancel(){
    this.router.navigateByUrl('/'); 
  }

  onClickSubmit(formdata:any){
var name= formdata.name;
this.service.postUser(formdata).subscribe((res)=>{
  alert("Inserted Successfully")
  this.myForm.reset({
    name: '',
    age: '',
    gender: '',
    address: '',
    mobnumber: '',
    email: '',
    paasword: '',
  
});
})
  }
}
