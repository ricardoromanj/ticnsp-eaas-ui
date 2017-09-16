import { NgModule } from '@angular/core';
import { MdButtonModule,
         MdSelectModule,
         MdDatepickerModule,
         MdNativeDateModule,
         MdCardModule,
         MdInputModule } from '@angular/material';

@NgModule({
  imports: [ MdButtonModule,
             MdInputModule,
             MdSelectModule,
             MdDatepickerModule,
             MdNativeDateModule,
             MdCardModule ],
  exports: [ MdButtonModule,
             MdInputModule,
             MdSelectModule,
             MdDatepickerModule,
             MdNativeDateModule,
             MdCardModule ]
})

export class MaterialModule { }
