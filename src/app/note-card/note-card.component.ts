import { Component, Input } from '@angular/core';
import { Note } from '../card-list/card-list.component';
import { CommonModule } from '@angular/common';

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
