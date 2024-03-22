import { Component } from '@angular/core';



@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrl: './polo.component.css'
})
export class PoloComponent {

  palavra: string = '';
  resultado: boolean | null = null;

  verificarPalindromo(): void {
    const palavraInvertida = this.palavra.split('').reverse().join('');
    this.resultado = this.palavra.toLowerCase() === palavraInvertida.toLowerCase();
  }
}

