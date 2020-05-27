import * as moment from 'moment/moment';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
export interface WorkDone {
  date:string,
  treatDone:string,
  details:string,
  advised:string,
  paid:string,
  bal:string,
  prescription:string
}

@Component({
  selector: 'app-workdone',
  templateUrl: './workdone.component.html',
  styleUrls: ['./workdone.component.css']
})
export class WorkdoneComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WorkdoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WorkDone) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

    this.data.date = moment().format("YYYY-MM-DD");
  }

}
