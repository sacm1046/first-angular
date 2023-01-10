import { Component, Input } from '@angular/core';
import { Data } from '../interfaces/data.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../form.component.scss']
})
export class ListComponent {
  @Input() items!: Data[]
}
