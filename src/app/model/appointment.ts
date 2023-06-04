import { AppointmentStatus } from "./appointmentStatus"

export class Appointment{
  idAppointment: number=0
  date= new Date(Date.now())
  client: number=0
  psychologist: number=0
  appointmentStatus: AppointmentStatus=new AppointmentStatus();

}
