import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

	@Output() receive = new EventEmitter<string>();

  city:any={};
  constructor(private search: SearchService) { }

  searchCity(city:string): void {
  	
  	
  		this.search.getData(city)
  		.subscribe(data=>{
  			this.city=data;
        console.log(this.city)
  			this.receive.emit(this.city);
  		})
  	
  }

}
