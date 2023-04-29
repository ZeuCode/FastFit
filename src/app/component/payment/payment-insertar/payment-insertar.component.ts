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
      cardNumber: new FormControl(),
      date: new FormControl(),
      currency:new FormControl(),
      import: new FormControl(),
      name:new FormControl(),
      lastname: new FormControl(),
      cvv:new FormControl(),
      expiration: new FormControl(),
      email:new FormControl(),

    })
  }

  aceptar(): void {

    this.payment.id = this.form.value['id'];
    this.payment.paymentCode = this.form.value['paymentCode'];
    this.payment.cardNumber = this.form.value['cardNumber'];
    this.payment.date = this.form.value['date'];
    this.payment.currency = this.form.value['currency'];
    this.payment.import = this.form.value['import'];
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
          cardNumber: new FormControl(data.cardNumber),
          date: new FormControl(data.date),
          currency:new FormControl(data.currency),
          import: new FormControl(data.import),
          name:new FormControl(data.name),
          lastname: new FormControl(data.lastname),
          cvv:new FormControl(data.cvv),
          expiration: new FormControl(data.expiration),
          email:new FormControl(data.email),
        });
      });
    }
  }
}
