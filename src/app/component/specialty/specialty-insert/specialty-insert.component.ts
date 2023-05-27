import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { specialty } from 'src/app/model/especialidad';
import { EspecialidadService } from 'src/app/service/especialidad.service';

@Component({
  selector: 'app-specialty-insert',
  templateUrl: './specialty-insert.component.html',
  styleUrls: ['./specialty-insert.component.css']
})
export class SpecialtyInsertComponent implements OnInit{

  id:number=0;
  edition:boolean=false;

  form: FormGroup=new FormGroup({});
  specialty: specialty=new specialty();
  mensaje: string = '';

  constructor(private eS: EspecialidadService, private router:Router, private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{ //update
      this.id=data['id'];
      this.edition=data['id']!=null;
      this.Init();
    })
    this.form=new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
      description:new FormControl(),
    })
  }

  accept(): void {

    this.specialty.id = this.form.value['id'];
    this.specialty.name = this.form.value['name'];
    this.specialty.description = this.form.value['description'];

    if (this.form.value['name'].length > 0) {

      if (this.edition) {
        //guardar pS
        this.eS.update(this.specialty).subscribe(()=>{
          this.eS.list().subscribe((data) => { ////actualizar la lista
            this.eS.setList(data);
          });
        });

      }else{
        //metodo insertar
        this.eS.insert(this.specialty).subscribe((data) => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
      }
      this.router.navigate(['specialty']);

    }else{

      this.mensaje='write name!!'
    }
  }

  Init(){
    if(this.edition){
      this.eS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.id),
          name:new FormControl(data.name),
          description:new FormControl(data.description),
        })
        console.log(data);
      })
    }
  }

}
