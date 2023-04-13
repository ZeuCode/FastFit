import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { payment } from 'src/app/model/payment';
import * as moment from 'moment';
import { PaymentService } from 'src/app/service/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-insertar',
  templateUrl: './payment-insertar.component.html',
  styleUrls: ['./payment-insertar.component.css']
})
export class PaymentInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  payment: payment = new payment();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private pS: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      paymentCode: new FormControl(),
      date: new FormControl(),
      cardNumber: new FormControl(),
      Client_id: new FormControl(),
      Psychologist_id: new FormControl(),
      active: new FormControl(),
    })
  }

  aceptar(): void{

    this.payment.id = this.form.value['id'];
    this.payment.paymentCode= this.form.value['paymentCode'];
    this.payment.date= this.form.value['date'];
    this.payment.cardNumber= this.form.value['cardNumber'];
    this.payment.Client_id= this.form.value['Client_id'];
    this.payment.Psychologist_id= this.form.value['Psychologist_id'];
    this.payment.active= this.form.value['active'];

    if(this.form.value['paymentCode'].length >0){
      this.pS.insert(this.payment).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
      })
    })
    this.router.navigate(['payment']);
  }else{
    this.mensaje='Ingrese el código del pago'
    }
  }
}
