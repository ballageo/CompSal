import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';

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


    let width = 900;
    let height = 600;

    let svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height);
    let path = d3.geoPath()
    let g = svg.append('g');
    g.attr('class', 'states');

    console.log("outside json calling1");


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
          .attr('d', path);
        console.log("ending json calling1");

      })
      .catch(error=>console.log(error));
  }
}