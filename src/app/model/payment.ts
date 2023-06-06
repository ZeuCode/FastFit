export class payment{
  idPayment:number=0
  paymentCode: string=""
  idAppointment: number=0
  cardNumber: string=""
  date: Date= new Date(Date.now())
  currency: string=""
  pago: number=0.0
  name: string=""
  lastname: string=""
  cvv:number=0.0
  expiration: Date= new Date(Date.now())
  email:string=""
}
