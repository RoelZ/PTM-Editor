import { Component, OnInit, Input } from '@angular/core';
import { Poster } from '../poster';
import { Style } from '../style';
import { PosterService } from '../poster.service';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-styler',
  templateUrl: './styler.component.html',
  styleUrls: ['./styler.component.scss']
})
export class StylerComponent implements OnInit {

  selectedStyle: Style;
  //selectedPoster: Poster;
  childMoment:string = "Your text here";
  
  styles : Style[];

  poster: Poster = {
    id: 1,
    moment: 'Your text here',
    placeid: '',
    location: 'Eindhoven - The Netherlands',
    address: 'De Jonghlaan 5',
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
