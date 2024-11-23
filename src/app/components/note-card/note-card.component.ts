import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  cardHeight = '290px';
  cardWidth = '380px';

  onDelete(noteId: string): void {
    this.deleteEvent.emit(noteId);
  }
}
