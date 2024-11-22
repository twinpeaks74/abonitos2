import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {
  @Input() showBackBtn = false;
  @Input() showCreateBtn = false;
  @Input() title = '';
}
