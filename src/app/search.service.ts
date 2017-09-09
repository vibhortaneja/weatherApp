import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

  constructor(private http: Http) { }

//Getting Data from weather data
  getData(city:any) {
  	return this.http.get(`http://api.apixu.com/v1/forecast.json?key=d9b76d0690ab41cabff125958170609&q=`+city+`&days=9`)
  	.map(res=>res.json())
  }

  save(data){
  	var expressApi='http://localhost:3002/api/insert'
  	return this.http.post(expressApi,data)
  	.map((res: Response)=>res.json())
  }

}
