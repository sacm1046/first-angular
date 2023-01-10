import { Component } from '@angular/core';
import { Data } from './interfaces/data.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  initial = {
    name: "",
    value: 0,
  }

  items: Data[] = []
  form: Data = {...this.initial}
}
