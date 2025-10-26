import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  items: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
}
