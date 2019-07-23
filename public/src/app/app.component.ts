import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import chuck from "../assets/data/comp_sal.json"




@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  all_50_A_MEAN = []
  
  constructor(){
    // this.getStateData(2016, "WA")
    this.getYearData(2018)
  }

  getStateData(year, state){
    for(var job of chuck){
      if(job['Year'] ==  year && job['ST'] == state){
        console.log(job)
      }
    }
  }
  getYearData(year){
    for(var job of chuck){
      if(job['Year'] == year && job['A_MEAN'] != "*"){
        console.log(chuck[0]['OCC_CODE'] == "15-0000")
        this.all_50_A_MEAN.push(job)
      }
    }
  }
}
