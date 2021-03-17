import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogModule, MatIconModule } from '@angular/material';



@NgModule({
  declarations: [MatConfirmDialogComponent],
  exports:[MatDialogModule,
    MatIconModule ],
  imports: [
    CommonModule,MatDialogModule, MatIconModule 

  ]
})
export class MaterialModule { }
