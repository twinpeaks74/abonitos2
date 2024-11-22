import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';
import { Note } from '../../models/note.model';
@Component({
  selector: 'app-card-list',
  imports: [CommonModule, NoteCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  standalone: true
})
export class CardListComponent {
  @Input() notes: Note[] = []
}
