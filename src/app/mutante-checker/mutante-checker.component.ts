import { Component, signal } from '@angular/core';
import { isMutant } from '../Utils/is-mutant.utils';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-mutante-checker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mutante-checker.component.html',
  styleUrl: './mutante-checker.component.css'
})
export class MutanteCheckerComponent {
  dnaInput = signal<string>('');  
  result = signal<string | null>(null);
  error = signal<string | null>(null);


  setDnaInput(value: string) {
    this.dnaInput.set(value);
  }

  validate() {
    this.error.set(null);
    this.result.set(null);
    try {
      const dnaArray = this.dnaInput().split('\n').map(r => r.trim()).filter(Boolean);
      const is = isMutant(dnaArray);
      this.result.set(is ? '✅ Mutante' : '🧬 Humano');
    } catch (e: any) {
      this.error.set(e.message);
    }
  }
}