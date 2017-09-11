import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AddService } from '../add.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[AddService]
})
export class DetailComponent implements OnInit {

/*  @Output() receive = new EventEmitter<string>();*/

 dat:any;
  city:any={};
  constructor(private add: AddService) { }


   delete(data:any) {
    this.add.deleteedata(data)
    .subscribe(res=>{
      var index = this.city.indexOf(data)
      this.city.splice(index,1)
    })
  }

 ngOnInit() {
    this.add.showData()
     .subscribe(res=>{
       this.city=res
 console.log(this.city)
   })

}
}