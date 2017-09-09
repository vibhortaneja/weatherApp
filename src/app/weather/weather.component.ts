import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
 title = 'app';
  city:any;

  //update weather list with dat recieved from weather api
  onreceive(s:any) {
  	this.city=s;
  	//console.log(this.city)
  }
}
