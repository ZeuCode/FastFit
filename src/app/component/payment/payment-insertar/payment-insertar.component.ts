import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { payment } from 'src/app/model/payment';
import * as moment from 'moment';
import { PaymentService } from 'src/app/service/payment.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

let dateToday: Date = new Date();

@Component({
  selector: 'app-payment-insertar',
  templateUrl: './payment-insertar.component.html',
  styleUrls: ['./payment-insertar.component.css']
})

export class PaymentInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  payment: payment = new payment();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  maxFecha: Date = new Date();
  minFecha: Date = new Date();

  constructor(
    private pS: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      paymentCode: new FormControl(),
      idAppointment: new FormControl(),
      cardNumber: new FormControl(),
      date: new FormControl(),
      currency: new FormControl(),
      pago: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      cvv: new FormControl(),
      expiration: new FormControl(),
      email: new FormControl()
    })
    console.log(this.id);
  }

  aceptar(): void {

    this.payment.idPayment = this.form.value['id'];
    this.payment.paymentCode = this.form.value['paymentCode'];
    this.payment.idAppointment = this.form.value['idAppointment'];
    this.payment.cardNumber = this.form.value['cardNumber'];
    //this.payment.date = this.form.value['date'];
    this.payment.date = dateToday;
    this.payment.currency = this.form.value['currency'];
    this.payment.pago = this.form.value['pago'];
    this.payment.name = this.form.value['name'];
    this.payment.lastname = this.form.value['lastname'];
    this.payment.cvv = this.form.value['cvv'];
    this.payment.expiration = this.form.value['expiration'];
    this.payment.email = this.form.value['email'];

    if (this.form.value['paymentCode'].length > 0) {
      if (this.edicion) {
        this.pS.update(this.payment).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.payment).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          })
        })
      }
      this.router.navigate(['payment']);
    }
    else {
      console.log("error");
    }
  }


  init() {
    if (this.edicion) {

      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idPayment),
          paymentCode: new FormControl(data.paymentCode),
          idAppointment: new FormControl(data.idAppointment),
          cardNumber: new FormControl(data.cardNumber),
          date: new FormControl(data.date),
          currency: new FormControl(data.currency),
          pago: new FormControl(data.pago),
          name: new FormControl(data.name),
          lastname: new FormControl(data.lastname),
          cvv: new FormControl(data.cvv),
          expiration: new FormControl(data.expiration),
          email: new FormControl(data.email),
        });
        console.log(data);
      });
    }
  }
}
