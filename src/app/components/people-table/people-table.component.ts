import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { People } from 'src/app/data';
import { Person } from 'src/app/models';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataService } from 'src/app/services';
import { MatIconModule } from '@angular/material/icon';
import { PeopleTableSelectComponent } from '../people-table-select/people-table-select.component';



@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [MatPaginatorModule,MatTableModule,MatFormFieldModule,MatInputModule,MatSortModule,MatCheckboxModule,FormsModule, MatDialogModule, MatIconModule],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['check','id', 'name', 'category', 'company','levelOfHappiness'];
  dataSource: MatTableDataSource<Person>;
  selectedEmployees: Person[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private dialogDataService: DataService ) {
    this.dataSource = new MatTableDataSource(People);
  }

  ngOnInit() {

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PeopleTableSelectComponent, {
      width: '650px',
      data: {
        enterAnimationDuration,
        exitAnimationDuration,
        palabra: "patata",
        selectedEmployees: this.selectedEmployees // Pasa la lista de empleados seleccionados al diálogo
      }
    });
  }

  //una vez que se carga la vista vamos a ver quien se encarga del paginador y del sort
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleSelection(row: Person) {
    
  
    if (row.selected) {
      this.selectedEmployees.push(row); // Agrega el empleado a la lista de seleccionados
    } else {
      const index = this.selectedEmployees.findIndex((employee) => employee === row);
      if (index !== -1) {
        this.selectedEmployees.splice(index, 1); // Elimina al empleado de la lista de seleccionados
      }
    }
  }
  
}


