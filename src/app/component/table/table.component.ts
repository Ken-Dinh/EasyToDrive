import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: false,
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: any[] = []; 

  
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}