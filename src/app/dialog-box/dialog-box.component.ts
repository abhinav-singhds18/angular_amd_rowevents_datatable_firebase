//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

export interface UsersData {
  id: number;
  Connection_Name: string;
  Database_Name: string;
  Connection_String: string;
  Database_Type: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;

  foods: Food[] = [
    {value: 'oracle', viewValue: 'Oracle Server'},
    {value: 'mssql', viewValue: 'Sql Server'},
    {value: 'mysql', viewValue: 'My Sql'}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
