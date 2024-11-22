import { Component, Input } from '@angular/core';
import { Note } from '../card-list/card-list.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() note!: Note;
}
