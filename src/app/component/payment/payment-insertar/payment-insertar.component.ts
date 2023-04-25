import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { payment } from 'src/app/model/payment';
import * as moment from 'moment';
import { PaymentService } from 'src/app/service/payment.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-payment-insertar',
  templateUrl: './payment-insertar.component.html',
  styleUrls: ['./payment-insertar.component.css']
})
export class PaymentInsertarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  payment: payment = new payment();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
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
      date: new FormControl(),
      cardNumber: new FormControl(),
      Client_id: new FormControl(),
      Psychologist_id: new FormControl(),
      active: new FormControl(),
    })
  }

  aceptar(): void {

    this.payment.id = this.form.value['id'];
    this.payment.paymentCode = this.form.value['paymentCode'];
    this.payment.date = this.form.value['date'];
    this.payment.cardNumber = this.form.value['cardNumber'];
    this.payment.Client_id = this.form.value['Client_id'];
    this.payment.Psychologist_id = this.form.value['Psychologist_id'];
    this.payment.active = this.form.value['active'];

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
    } else {
      this.mensaje = 'Ingrese el código del pago'
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          paymentCode: new FormControl(data.paymentCode),
          date: new FormControl(data.date),
          cardNumber: new FormControl(data.cardNumber),
          Client_id: new FormControl(data.Client_id),
          Psychologist_id: new FormControl(data.Psychologist_id),
          active: new FormControl(data.active),
        });
      });
    }
  }
}
