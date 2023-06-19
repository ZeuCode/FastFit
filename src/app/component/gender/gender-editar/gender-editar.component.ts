import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gender } from 'src/app/model/gender';
import { GenderService } from 'src/app/service/gender.service';

@Component({
  selector: 'app-gender-editar',
  templateUrl: './gender-editar.component.html',
  styleUrls: ['./gender-editar.component.css'],
})
export class GenderEditarComponent implements OnInit {
  id: number = 0;
  edition: boolean = false;

  form: FormGroup = new FormGroup({});
  gender: Gender = new Gender();
  mensaje: string = '';

  constructor(
    private gS: GenderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      //update
      this.id = data['id'];
      this.edition = data['id'] != null;
      this.Init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      gender: new FormControl(),
      abbreviation: new FormControl(),
    });
  }

  accept(): void {
    this.gender.idGender = this.form.value['id'];
    this.gender.gender = this.form.value['gender'];
    this.gender.abbreviation = this.form.value['abbreviation'];

    if (this.form.value['gender'].length > 0) {
      if (this.edition) {
        //guardar pS
        this.gS.update(this.gender).subscribe(() => {
          this.gS.list().subscribe((data) => {
            this.gS.setList(data);
          });
        });
      } else {
        //metodo insertar
        this.gS.insert(this.gender).subscribe((data) => {
          this.gS.list().subscribe((data) => {
            this.gS.setList(data);
          });
        });
      }
      this.router.navigate(['pages/genders']);
    } else {
      this.mensaje = 'write name!!';
    }
  }

  Init() {
    if (this.edition) {
      this.gS.listid(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idGender),
          gender: new FormControl(data.gender),
          abbreviation: new FormControl(data.abbreviation),
        });
        console.log(data);
      });
    }
  }
}
