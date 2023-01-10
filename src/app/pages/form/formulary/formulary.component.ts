import { Component, Input } from '@angular/core';
import { Data } from '../interfaces/data.interface';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['../form.component.scss']
})
export class FormularyComponent {
  @Input() form!: Data
  @Input() items!: Data[]

  initial = {
    name: "",
    value: 0,
  }

  submit(){
    this.items.push(this.form)
    this.form = {...this.initial}
  }
}
