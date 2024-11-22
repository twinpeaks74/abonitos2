import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardListComponent, ToolBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'notes-app';
}
