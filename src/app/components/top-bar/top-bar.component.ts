import {Component, inject, TemplateRef} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  private offCanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offCanvasService.open(content, { position: 'end' });
  }

}
