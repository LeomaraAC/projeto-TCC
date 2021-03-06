import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule, MatDividerModule, MatIconModule} from '@angular/material';

import {ModalComponent} from './message/modal/modal.component';
import { SnackbarComponent } from './message/snackbar/snackbar.component';

@NgModule({
  declarations: [
    ModalComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    ModalComponent,
    SnackbarComponent
  ],
  entryComponents: [ModalComponent]
})

export class SharedModule {}
