import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series/series.service';
import { Serie } from '../series/serie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  series: Serie[] = [];
  selected?: Serie;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
    });
  }

  select(s: Serie) {
    this.selected = s;
  }
}
