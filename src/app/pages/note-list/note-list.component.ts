import { Component } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';

@Component({
  selector: 'app-note-list',
  imports: [CardListComponent, ToolBarComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent {}
