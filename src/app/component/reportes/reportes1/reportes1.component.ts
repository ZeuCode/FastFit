import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { PsiSpecialtyDTO } from 'src/app/model/PsiSpecialtyDTO';
import { PsiService } from 'src/app/service/psi.service';
@Component({
  selector: 'app-reportes1',
  templateUrl: './reportes1.component.html',
  styleUrls: ['./reportes1.component.css']
})
export class Reportes1Component  implements OnInit{
  petCounts: PsiSpecialtyDTO[] = [];
  dataSource: MatTableDataSource<PsiSpecialtyDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['vacuna','cantidad']

  constructor(private pS: PsiService) { }

  ngOnInit(): void {
    this.pS.getPetCountByVaccine().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getPetCountByVaccine(): void {
    this.pS.getPetCountByVaccine()
      .subscribe((data: PsiSpecialtyDTO[]) => {
        this.petCounts = data;
      });
  }

}
