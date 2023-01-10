import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../interfaces/data.interface';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['../form.component.scss']
})
export class FormularyComponent {
  @Input() form!: Data
  @Output() onAdd: EventEmitter<Data> = new EventEmitter()

  initial = {
    name: "",
    value: 0,
  }

  submit(){
    this.onAdd.emit(this.form)
    this.form = {...this.initial}
  }
}
