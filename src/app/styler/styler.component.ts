import { Component, OnInit, Input } from '@angular/core';
import { Poster } from '../poster';
import { Style } from '../style';
import { PosterService } from '../poster.service';

@Component({
  selector: 'app-styler',
  templateUrl: './styler.component.html',
  styleUrls: ['./styler.component.scss']
})
export class StylerComponent implements OnInit {

  selectedStyle: Style;
  
  styles : Style[];

  @Input() poster: Poster = {
    id: 1,
    moment: 'Your text here',
    placeid: '',
    location: '',
    address: '',
    lat: 0,
    lng: 0
  }

  constructor(private posterService: PosterService) { }

/*
  currentStyles: {};
  setCurrentStyles(){
    this.currentStyles = {
      'snow': this.selectedStyle.name == "snow",
      'moon': this.selectedStyle.name == "moon",
      'granite': this.selectedStyle.name == "granite",
      'mint': this.selectedStyle.name == "mint"
    };
  };
*/

  getStyles(): void {
    //this.styles = this.posterService.getStyles();
    this.posterService.getStyles()
    .subscribe(styles => this.styles = styles);
  }

  ngOnInit() {
    this.getStyles();
  //  this.setCurrentStyles();
  }

  onSelect(style: Style): void {
    this.selectedStyle = style;
  }
}
