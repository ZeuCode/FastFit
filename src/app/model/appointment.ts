import { AppointmentStatus } from "./appointmentStatus"
import { Client } from "./client"
import { Psi } from "./psi";

export class Appointment{
  idAppointment: number=0;
  date: Date= new Date(Date.now());
  client: Client=new Client();
  psychologist: Psi=new Psi();
  appointmentStatus: AppointmentStatus=new AppointmentStatus();

}
