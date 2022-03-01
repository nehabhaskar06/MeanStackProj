import { Injectable } from '@angular/core';
import{User} from './shared/user.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
selectedUser:User | undefined;
users:User[]| undefined;

readonly baseURL='http://localhost:3000/userdetails'
readonly mobnumberURL='http://localhost:3000/userdetails/mobnumber'
loginNumber: any;
readonly loginpwd:any;
  constructor(private http:HttpClient) { }

postUser(user:User){
  return this.http.post(this.baseURL,user)
}

getuser(mobnumber:any){
  return this.http.get(this.mobnumberURL,{params:{mobnumber:mobnumber}})

}

getAlluser(){
  return this.http.get(this.baseURL)
}

deleteUser(_id: string){
  return this.http.delete(this.baseURL + `/${_id}`)
}

updateUser(user:User){
  return this.http.put(this.baseURL + `/${user._id}`,user)
}

}
