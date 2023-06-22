import { AppointmentStatus } from './appointmentStatus';
import { Client } from './client';
import { Turn } from './turn';

export class Appointment {
  idAppointment: number = 0;
  client: Client = new Client();
  appointmentStatus: AppointmentStatus = new AppointmentStatus();
  turn: Turn = new Turn();
}
