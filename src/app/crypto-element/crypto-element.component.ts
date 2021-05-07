import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-crypto-element',
  templateUrl: './crypto-element.component.html',
  styleUrls: ['./crypto-element.component.css']
})
export class CryptoElementComponent implements OnInit {

  @Input() name = 'Bitcoin';
  @Input() quantity = '5';
  @Input() BoughtAtPrice = '16';
  @Input() DateOfBuying = '25-13-2021';

  constructor() { }

  ngOnInit(): void {
  }

}
