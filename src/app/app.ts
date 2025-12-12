import {Component, signal} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatInputModule, MatInputModule, MatButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('OurGov');
}
