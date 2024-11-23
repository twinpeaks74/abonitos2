import { Component, OnInit } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  imports: [ToolBarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
  editNoteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: ActivatedRoute) {
    this.editNoteForm = fb.group({
      title: ['', Validators.required],
      content: [''],
    });
  }

  ngOnInit(): void {
    const noteId = this.router.snapshot.paramMap.get('id') || '';
    console.log('Note ID:', noteId);
  }

  onSubmit() {
    if (this.editNoteForm.valid) {
      console.log();
      this.editNoteForm.value;
    }
  }
}
