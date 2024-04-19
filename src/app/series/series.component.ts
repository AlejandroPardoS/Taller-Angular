import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  
  constructor(private seriesService: SeriesService) { }
  series: Array<Serie> = [];
  average: number = 0;

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.seriesService.getAverage(this.series).subscribe(average => {
        this.average = average;
      });
    });
  }


  ngOnInit() {
    this.getSeries();
  }

}
