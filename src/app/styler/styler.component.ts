import { Component, OnInit, Input } from '@angular/core';
import { Poster } from '../poster';

@Component({
  selector: 'app-styler',
  templateUrl: './styler.component.html',
  styleUrls: ['./styler.component.scss']
})
export class StylerComponent implements OnInit {

  @Input() poster: Poster = {
    id: 1,
    moment: 'Your text here',
    placeid: '',
    location: '',
    address: '',
    lat: 0,
    lng: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
