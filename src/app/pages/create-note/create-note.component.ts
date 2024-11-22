import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-note',
  imports: [ToolBarComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css',
})
export class CreateNoteComponent {
  noteCreated: Partial<Note> = {
    title: '',
    content: '',
  };

  constructor(private noteService: NotesService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(this.noteCreated);
      this.noteService.createNote(this.noteCreated);
      this.router.navigate(['/']);
    }
  }
}
