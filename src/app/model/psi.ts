import { specialty } from "./especialidad";
export class Psi {
  idPsi: number = 0;
  userName: string = "";
  password: string = "";
  names: string = "";
  lastNames: string = "";
  emailAddress: string = "";
  phoneNumber: string = "";
  age: number = 0;
  rating: number = 0;
  UserStatus_Id: number = 0;
  Gender_id: string = "";
  specialty: specialty = new specialty();
}
