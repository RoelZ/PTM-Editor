import { Component, OnInit, Input } from '@angular/core';
import { Poster } from '../poster';
import { Style } from '../style';

import { MouseEvent } from '@agm/core';
import { MapTypeStyle } from '@agm/core/services/google-maps-types';
import { AgmMap } from '@agm/core/directives/map';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  
  @Input() style: Style;
  //@Input() posters: Poster;
  @Input() poster: Poster;

  //AgmMap: Style;

  //styles: Style[];

  //style: Style;
  //selectedStyle: Style;

  //selectedPoster: Poster;

/*
  onSelect(style: Style): void {
    this.selectedStyle = style;
  }

poster: Poster = {
    id: 1,
    moment: 'Your text here',
    placeid: '',
    location: '',
    address: '',
    lat: 0,
    lng: 0
  }
*/
  zoom: number = 5;

  lat: number = 51.4431041;
  lng: number = 5.4611137;
  
  //style: MapTypeStyle[];

  //style: MapTypeStyle[] = this.selectedStyle.style;

  //style: MapTypeStyle[] = [{"stylers":[{"visibility":"off"}]},{"elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"weight":1.5}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","stylers":[{"weight":1}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","stylers":[{"weight":0.5}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
  
  /*
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markers: marker[];
*/

  constructor() { }

  ngOnInit() {
    
  }

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
