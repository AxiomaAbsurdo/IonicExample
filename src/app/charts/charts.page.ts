import { HomeService } from './../home/home.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {

  constructor( private homeService: HomeService) { }

  goToHomeState = this.homeService.goToHomeState;
  
  ngOnInit() {
  }

}
