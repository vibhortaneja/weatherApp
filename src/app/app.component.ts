import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  city:any;

  onreceive(s:any) {
  	this.city=s;
  	//console.log(this.city)
  }
}
