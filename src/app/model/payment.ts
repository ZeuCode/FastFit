export class payment{
  id:number=0
  paymentCode: string=""
  cardNumber: string=""
  date: Date= new Date(Date.now())
  currency: string=""
  import: number=0.0
  name: string=""
  lastname: string=""
  cvv:number=0.0
  expiration: Date= new Date(Date.now())
  email:string=""
}
