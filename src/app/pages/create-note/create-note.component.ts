import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { Note } from '../../components/card-list/card-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(this.noteCreated);
    }
  }
}
