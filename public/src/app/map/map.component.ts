import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';
import chuck from "../../assets/data/comp_sal.json"


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  public name: string = 'd3';

  // constructor(private userService: UserService) {
  // }

  public ngOnInit(): void {


    let width = 960;
    let height = 600;

    let svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height);
    let path = d3.geoPath()
    let g = svg.append('g');
    g.attr('class', 'states');

    console.log("outside json calling1");



    var tooltip = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);


    var state_data = {
      "State" : ["WA, CA, OR"],
    };
    

    d3.json("https://d3js.org/us-10m.v1.json")

      .then(function (data) {
        // <---- Renamed it from data to data
        console.log("------>", data.feature);
        g.selectAll('path')
          .data(t.feature(data, data.objects.states).features)
          //.data(t.feature(data, data.objects.states)
          //  .geometries)
          .enter()
          .append('path')
          .attr("class", "state-borders")
          .attr('d', path)
          .on("mouseover", function(d) {    
            tooltip.transition()    
            .duration(200)    
            .style("opacity", .9);    
            // tooltip.html(d.properties.NAME) // d holds the coordinates for drawing the map, d.properties.NAME is undefined for every state except Missouri, which throws an error.
            tooltip.html(d.properties.NAME)  
            .style("left", (d3.event.pageX) + "px")   
            .style("top", (d3.event.pageY - 28) + "px")
            console.log(d.id)

            // .text("hello")
          })          
          .on("mouseout", function(d) {   
            tooltip.transition()    
            .duration(500)    
            .style("opacity", 0)  
            
          });
        g.selectAll("path")
          .data(state_data.State)
          .append("text")
          .attr("class", "label")
          .text( function(d) {
            console.log(d.properties)
          })

        console.log("ending json calling1");


      })
      .catch(error=>console.log(error));
  }



  
}