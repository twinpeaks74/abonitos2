import { Routes } from '@angular/router';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

export const routes: Routes = [
  {path: '', component: NoteListComponent},
  {path: 'create-note', component: CreateNoteComponent},
  {path: 'edit-note/:id', component: EditNoteComponent},
  {path: '**', redirectTo: ''},
];
