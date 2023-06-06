import {AppointmentStatus} from "./appointmentStatus"
export class Citas{
  id: number=0
  date= new Date(Date.now())
  client_id: string=""
  PsychologistID: string=""
  appointmentStatus:AppointmentStatus=new AppointmentStatus()
}
