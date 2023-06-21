import { UserStatus } from "./UserStatus"
import { Gender } from "./gender"

export class Client{
  idClient:number= 0
  userName:string= ""
  password:string= ""
  names:string= ""
  lastNames:string= ""
  emailAddress:string= ""
  phoneNumber:string= ""
  age:number= 0
  userStatus:UserStatus=new UserStatus()
  gender:Gender=new Gender()
}
