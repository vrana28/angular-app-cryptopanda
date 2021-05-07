import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './crypto-form.component.html',
  styleUrls: ['./crypto-form.component.css']
})
export class CryptoFormComponent {
  text = 'quote';
  author = 'author';
  fullQuote = 'full quote';


  onAddQuote(): void {
    console.log('Quote added');
    this.fullQuote = `'${this.text}' - ${this.author}`;
  }

  onChangeOfAuthor(event: Event): void {
    console.log(event);
    console.log(event.target);
    this.author = (event.target as HTMLInputElement).value;
  }

}
