import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteListComponent } from './pages/note-list/note-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'notes-app';
}
