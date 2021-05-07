import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Cryptocurrency} from '../cryptocurrency.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cryptos$: Cryptocurrency[] | any;

  constructor(private dataService: DataService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    return this.dataService.getPrices().subscribe( (data: any) => this.cryptos$ = data);
  }

}
