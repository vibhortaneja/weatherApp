import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AddService {

 constructor(private http: Http) { }

 getData(city:any) {
      return this.http.post('http://localhost:3003/weather/insert',city)
      .map(res=>res.json())
  }

 showData() {
      return this.http.get('http://localhost:3003/api/find')
      .map(res=>res.json())
  }

 editData(data:any, up:any) {
      return this.http.put('http://localhost:3003/api/update/'+data.date,up)
      .map(res=>res.json())
  }

 deleteedata(data:any) {
      return this.http.delete('http://localhost:3003/api/delete/'+data.date)
      .map(res=>res.json())
  }


}