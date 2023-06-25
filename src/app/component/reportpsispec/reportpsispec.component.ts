import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { psispecialtyDTO } from 'src/app/model/psispecialtyDTO';
import { PsiService } from 'src/app/service/psi.service';

@Component({
  selector: 'app-reportpsispec',
  templateUrl: './reportpsispec.component.html',
  styleUrls: ['./reportpsispec.component.css']
})
export class ReportpsispecComponent  implements OnInit{

  petCounts: psispecialtyDTO[] = [];
  dataSource: MatTableDataSource<psispecialtyDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['specialidad','cantidad']

  constructor(private pS: PsiService) { }

  ngOnInit(): void {
    this.pS.getSpecCountByPsi().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getPetCountByVaccine(): void {
    this.pS.getSpecCountByPsi()
      .subscribe((data: psispecialtyDTO[]) => {
        this.petCounts = data;
      });
  }

}
