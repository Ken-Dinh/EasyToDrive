import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  standalone: false,
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {
  @Input() itemToDelete: any;
  @Input() currentTable: string | undefined;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  confirmDelete() {
    this.confirm.emit();
  }

  cancelDelete() {
    this.cancel.emit();
  }
}