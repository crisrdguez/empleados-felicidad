import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [MatTableModule,CommonModule ],
  selector: 'app-people-table-select',
  templateUrl: './people-table-select.component.html',
  styleUrls: ['./people-table-select.component.scss']
})
export class PeopleTableSelectComponent {
  constructor(
    public dialogRef: MatDialogRef<PeopleTableSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("data: ");
    console.log(data.selectedEmployees);
   }

}
