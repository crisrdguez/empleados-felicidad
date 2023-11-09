import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PeopleTableComponent } from '../people-table';
import { DataService } from 'src/app/services';
import { Person } from 'src/app/models';
import { CommonModule } from '@angular/common';


@Component({
  standalone:true,
  imports:[MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, CommonModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

  constructor(public dialog: MatDialog, private dialogDataService: DataService){
    
  }
  /*
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(PeopleTableComponent, {
      data: { enterAnimationDuration, exitAnimationDuration }, // Pasa los datos que necesitas, puedes agregar más si es necesario
    });*/

  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    
    //El componente se va a inicializar cuando el dialogo lo abra
    this.dialog.open(PeopleTableComponent, {
      width: '650px',
      data:{
        enterAnimationDuration,
        exitAnimationDuration,
        palabra:"patata"
      }
    });
  }

  ngOnInit(): void {
  }

}



