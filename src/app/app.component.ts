import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'notes-app';
}
