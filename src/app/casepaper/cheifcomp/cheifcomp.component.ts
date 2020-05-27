import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import * as moment from 'moment/moment';
export interface DialogData {
  date: string;
  complain: string;
}

@Component({
  selector: 'app-cheifcomp',
  templateUrl: './cheifcomp.component.html',
  styleUrls: ['./cheifcomp.component.css']
})
export class CheifcompComponent implements OnInit {
  myControl = new FormControl();
  // myControlDate = new FormControl();
  options: string[] = ['Route cancal', 'Fixing', 'Burshing'];
  filteredOptions: Observable<string[]>;
  
  ngOnInit() {
    this.data.date = moment().format("YYYY-MM-DD");
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(
    public dialogRef: MatDialogRef<CheifcompComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
