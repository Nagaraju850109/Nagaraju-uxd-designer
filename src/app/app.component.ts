import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {ContactMeComponent} from "./components/contact-me/contact-me.component";
import {HomeComponent} from "./components/home/home.component";
import {FooterBarComponent} from "./components/footer-bar/footer-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent, ContactMeComponent, HomeComponent, FooterBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nagaraju-uxd-designer';
}
