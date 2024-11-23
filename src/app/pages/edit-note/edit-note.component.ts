import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-edit-note',
  imports: [ToolBarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent {
  editNoteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editNoteForm = fb.group({
      title: ['', Validators.required],
      content: [''],
    });
  }

  onSubmit() {
    if (this.editNoteForm.valid) {
      console.log();
      this.editNoteForm.value;
    }
  }
}
