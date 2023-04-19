import { PsiService } from './../../../service/psi.service';
import { Psi } from './../../../model/psi';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-psi-listar',
  templateUrl: './psi-listar.component.html',
  styleUrls: ['./psi-listar.component.css'],
})
export class PsiListarComponent implements OnInit {
  dataSource: MatTableDataSource<Psi> = new MatTableDataSource();
  lista: Psi[] = [];
  displayedColumns: string[] = ['id', 'userName', 'password', 'names', 'lastNames', 'emailAddress', 'phoneNumber', 'age', 'rating','UserStatus_Id','Speciality_id','Gender_id'];

  constructor(private pS: PsiService) {}
  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    }

    )
  }
}
