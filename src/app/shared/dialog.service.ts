import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  OpenConfirmDialog(msg){
    return this.dialog.open(MatConfirmDialogComponent,{
       width:'390px',
       panelClass:'confirm-dialog-container',
       disableClose:true,
       position:{top:"35vh"},
       data:{
         message:msg
       }
     })
     }
}