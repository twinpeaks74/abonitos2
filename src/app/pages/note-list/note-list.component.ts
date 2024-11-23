import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  imports: [ToolBarComponent, NoteCardComponent, CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent {
  displayDeleteModal = false;
  notes!: Note[];
  selectedNoteForDelete!: Note

  constructor(private noteService: NotesService) {
    this.notes = this.noteService.notes;
  }

  selectNoteForDelete(noteId: string): void {
    const noteFound = this.noteService.selectNote(noteId)
    if (noteFound) {
      this.selectedNoteForDelete = noteFound;
    }
    this.toggleModal();
  }

  deleteNote(noteId: string): void {
    this.noteService.deleteNote(noteId);
    this.toggleModal();
  }

  toggleModal(): void {
    this.displayDeleteModal = !this.displayDeleteModal;
  }
}
