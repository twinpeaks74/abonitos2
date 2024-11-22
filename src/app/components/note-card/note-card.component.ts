import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() note!: Note;
  cardHeight = '290px';
  cardWidth = '380px';
}
