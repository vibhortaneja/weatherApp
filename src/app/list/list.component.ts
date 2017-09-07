import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input('city') city:any;
data:any={};
  constructor(private searchService:SearchService) { }
  
  saveData(data){
  	console.log(data)
  	this.data={"city":data.name,
  	"county":data.country,
  	"date":data.date,
  	"maxtemp":data.day.maxtemp_c,
  	"mintemp":data.day.mintemp_c,
  	"condition":data.day.condition.text
  	};
  	this.searchService.save(this.data).subscribe((data:any)=>{
console.log(data);
  	})
  }



}
