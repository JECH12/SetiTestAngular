import { Component } from '@angular/core';
import { MutanteCheckerComponent } from './mutante-checker/mutante-checker.component';

@Component({
  selector: 'app-root',
  imports: [MutanteCheckerComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mutant-detector';
}
