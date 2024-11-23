import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];

  createNote(note: Partial<Note>) {
    const newNote: Note = {
      id: (this.notes.length + 1).toString(),
      title: note.title ?? '',
      content: note.content ?? '',
      date: new Date().toString(),
    };

    this.notes.push(newNote);
  }

  editNote(noteId: string, note: Partial<Note>): void {
    let noteEdited = this.selectNote(noteId);
    if (noteEdited) {
      noteEdited = {
        ...noteEdited,
        ...note,
        date: new Date().toString(),
      };
    }
    const notePosition = this.notes.findIndex(note => note.id === noteId);
    if (notePosition !== -1) {
      this.notes[notePosition] = noteEdited!
    }
  }

  deleteNote(noteId: string): Note[] {
    this.notes = this.notes.filter((note) => {
      return note.id !== noteId;
    });
    return this.notes;
  }

  selectNote(noteId: string): Note | undefined {
    return this.notes.find((note) => note.id === noteId);
  }
}
