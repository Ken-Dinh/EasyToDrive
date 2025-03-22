import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: false,
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() selectedTable: string = '';
  @Input() getPutRoute!: (item: any) => string; // Méthode pour générer la route de modification
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  getKeys(obj: any): string[] {
    if (!obj) {
      return [""];
    }
    return Object.keys(obj);
  }

  deleteItem(item: any) {
    this.delete.emit(item);
  }
}