import { Component } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-list',
  imports: [CardListComponent, ToolBarComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent {
  notes!: Note[];

  constructor(private noteService: NotesService) {
    this.notes = this.noteService.notes;
  }
}
