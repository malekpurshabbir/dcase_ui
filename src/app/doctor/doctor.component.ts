import { Component, OnInit,HostListener, ViewChild } from '@angular/core';
import {ChiefComp} from './chiefcomp'
import { MatDialog } from '@angular/material';
import hotkeys from 'hotkeys-js';
import { MyprofileComponent } from '../myprofile/myprofile.component';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export enum KEY_CODE {
  
  RIGHT_ARROW = 80,
  LEFT_ARROW = 37
}
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  opened = false;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.shiftKey && event.which === KEY_CODE.RIGHT_ARROW) {
      this.openDialog();
    }
  }

  constructor(private http: HttpClient ,public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(MyprofileComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // opened = false;
  
    });
  }


 
  WorkDoneSettings = {
    // delete: {
    //   confirmDelete: true,

    //   deleteButtonContent: 'Delete data',
    //   saveButtonContent: 'save',
    //   cancelButtonContent: 'cancel'
    // },
    // add: {
    //   confirmCreate: true,
    // },
    // edit: {
    //   confirmSave: false,
    // },
        columns: {
      id: {
        title: 'ID',
        filter:false,
        width:'100px'
      }, 
      date: {
        title: 'Date',
     
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
   
        }
      },
      treatDOne: {
        title: 'Treatment Done',
        filter:false,
        
      },
      details: {
        title: 'Details',
        filter:false,
        
      },
      treatadv: {
        title: 'Treatment Advised',
        filter:false,
        
      },
      paid: {
        title: 'Paid',
        filter:false,
        
      },
      balnce: {
        title: 'Balance',
        filter:false,
        
      },
      prescriptions: {
        title: 'Prescriptions',
        filter:false,
        
      },bill: {
        title: 'Bill',
        filter:false,
        
      }
    },
    attr: {
      class: 'table table-bordered'
    },
    actions: {
      add: true,
      edit: true,
      delete:true,
      },
  };
workdoneData=[];

  chiefsettings = {
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: false,
    },
        columns: {
      id: {
        title: 'ID',
        filter:false,
        width:'100px'
      }, 
      date: {
        title: 'Date',
     
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
        
        }
      },
      chefi: {
        title: 'Chief Complaints',
        filter:false,
        
      }
    },
    attr: {
      class: 'table table-bordered'
    },
    actions: {
      add: true,
      edit: true,
      delete:true,
      },
  };
  chefidata = [
    {
      id: 1,
      date: "2019-08-14T00:45:51",
      chefi:"safg"
      
    },
    {
      id: 2,
      date: "2019-08-14T00:45:51",
    }
  ];

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to to Create?')) {
   
      var data = {"id" : event.newData.id,
                "date" : event.newData.Date,
                "Compalin" : event.newData.chefi
                };
                
	this.http.post<ChiefComp>('http://dagduteli.com/distri/AngaulrReport/demo/add.php', data).subscribe(
        res => {
          alert(res);
          console.log(res);
          event.confirm.resolve(event.newData);
      },err => console.log(err)
      );
     
    
     }   }
  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }
  
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
