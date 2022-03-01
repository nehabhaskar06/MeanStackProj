import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import{User} from '../shared/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  data: any;
  enableEditIndex = null;
  enableEdit: boolean = false;
  gridForm: FormGroup;
  editName:any;
  editAge:any;
  editGender:any;
  editAddress:any;
  editMobNumber:any;
  editEmail:any;
  myForm: FormGroup;
  showDependent = false;
  showSlot=false;
  bookSlotForm: FormGroup;
  visibleValues: any = ['First', 'Second'];
  dose: any;
  vaccine: any;


  constructor(private service: UserServiceService, private router:Router, private login:LoginComponent) {
    this.gridForm = new FormGroup({
      name:  new FormControl(''),
age:  new FormControl(''),
gender:  new FormControl(''),
address:  new FormControl(''),
mobnumber:  new FormControl(''),
email:  new FormControl(''),
paasword:  new FormControl(''),
});

this.myForm = new FormGroup({
  name:  new FormControl(''),
age:  new FormControl(''),
gender:  new FormControl(''),
address:  new FormControl(''),
mobnumber:  new FormControl(''),
email:  new FormControl(''),
paasword:  new FormControl(''),
});


this.bookSlotForm = new FormGroup({
  dose:  new FormControl(''),
date:  new FormControl(''),
vaccineName:  new FormControl(''),

});
   }

  ngOnInit(): void {

    this.gridForm = new FormGroup({
      name:  new FormControl(''),
age:  new FormControl(''),
gender:  new FormControl(''),
address:  new FormControl(''),
mobnumber:  new FormControl(''),
email:  new FormControl(''),
paasword:  new FormControl(''),
});

   this.refreshUser()
console.log(this.service.loginNumber)
  }

  refreshUser(){
    this.service.getuser(this.service.loginNumber).subscribe((res)=>{
      this.data=res as User[];
      if(!(this.data &&this.data.length)){
  
        alert('No Record found for Mobile Number ' + this.service.loginNumber);
      }
       
    })
  }

  Cancel(){
    this.showDependent=false;
  }

  edituser(user:any,i:any){
    this.enableEdit = true;
    this.enableEditIndex = i;
    
        this.editName = user.name ? user.name : "";
        this.editAge = user.age ? user.age : "";
        this.editGender = user.gender ? user.gender : "";
        this.editAddress = user.address ? user.address : "";
        this.editMobNumber = user.mobnumber ? user.mobnumber : "";
        this.editEmail = user.email ? user.email : "";
  
  }


  saveUser(){
    this.enableEditIndex = null;
    var user = {
      "_id":this.data[0]._id,
      "name": this.editName ? this.editName : null,
      "age": this.editAge ? this.editAge : null,
      "gender": this.editGender ? this.editGender : null,
      "address": this.editAddress ? this.editAddress : null,
      "mobnumber": this.editMobNumber ? this.editMobNumber : null,
      "email": this.editEmail ? this.editEmail: null,
      "paasword": this.data[0].paasword
    }

    this.service.updateUser(user).subscribe((res)=>{
      alert('Updated Successfully');
      this.refreshUser();
    })
  }

  cancelUser(){
    this.enableEditIndex = null;
  }

  deleteUser(data:any, _id:any){
if(confirm('Are you sure to delete this record ?')==true){
this.service.deleteUser(_id).subscribe((res)=>{
  alert('Deleted Successfully');
  this.service.getuser(this.service.loginNumber).subscribe((res)=>{
    this.data=res as User[];
    if(!(this.data &&this.data.length)){

      alert('No Record found ');
    }
     
  })
})
}
}
  
 addDependent(){
  this.showDependent=true;
  this.showSlot=false;
}

onClickSubmit(formdata:any){
  var name= formdata.name;
  this.service.postUser(formdata).subscribe((res)=>{
    alert("Added Dependent Successfully")
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

BookSlot(){
  this.showSlot=true;
  this.showDependent=false
}

Back(){
  this.showSlot=false;
}

get form() {  
  return this.bookSlotForm.controls;  
}  
  
Book(){
  
   if(!(this.dose)){
    alert('Plesae select dose')
  }else if(!(this.form.vaccineName.value)){
alert('Please select vaccine')
  }else{
    if(this.dose == "First"){
      alert("First Dose registered")
      }else{
      alert("Second Dose rgistered")
      }

      this.bookSlotForm.reset({
        vaccineName: '',
        dose: '',
     
    });
  }


  
}


}
