import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormularyComponent } from './formulary/formulary.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    FormularyComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class FormModule { }
