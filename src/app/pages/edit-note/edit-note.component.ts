import { Component, OnInit } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-edit-note',
  imports: [ToolBarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
  editNoteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private noteService: NotesService,
    private router: Router
  ) {
    this.editNoteForm = fb.group({
      title: ['', Validators.required],
      content: [''],
    });
  }

  ngOnInit(): void {
    const noteId = this.activatedRoute.snapshot.paramMap.get('id');
    if (noteId) {
      const noteForEdit = this.noteService.selectNote(noteId)!;
      if (noteForEdit) {
        this.editNoteForm.get('title')?.setValue(noteForEdit.title);
        this.editNoteForm.get('content')?.setValue(noteForEdit.content);
      } else {
        this.router.navigate(['/'])
      }
    }
  }

  onSubmit() {
    if (this.editNoteForm.valid) {
      console.log(this.editNoteForm.value);
    }
  }
}
