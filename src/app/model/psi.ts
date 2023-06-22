import { UserStatus } from "./UserStatus";
import { specialty } from "./especialidad";
import { Gender } from "./gender";
export class Psi {
  idPsi: number = 0;
  userName: string = "";
  password: string = "";
  names: string = "";
  lastNames: string = "";
  emailAddress: string = "";
  phoneNumber: string = "";
  age: Date= new Date(Date.now());
  rating: number = 0;
  userStatus:UserStatus=new UserStatus();
  gender:Gender=new Gender();
  specialty: specialty = new specialty();
}
