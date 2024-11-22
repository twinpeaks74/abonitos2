import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-create-note',
  imports: [ToolBarComponent, FormsModule, CommonModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {
  noteCreated: Partial<Note> = {
    title: '',
    content: ''
  }

  constructor(private noteService: NotesService) {

  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(this.noteCreated);
      this.noteService.createNote(this.noteCreated);
    }
  }
}
