import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {Chart, ChartItem, registerables} from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];

  constructor(private authService: AuthService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.authService.getData().then((response: any) => {
      this.result = response;
      this.coinPrice = this.result.data.coins.map((coin: any) => coin.price);
      this.coinName = this.result.data.coins.map((coin: any) => coin.name);
      var ctx = document.getElementById('canvas') as ChartItem;
      if(ctx){
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels:this.coinName,
            datasets: [{
              label: 'Coin Price',
              data: this.coinPrice,
              borderWidth: 1,
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderColor: '#3e95cd'
            }]
          }
        });
      }
    })
  }
}

