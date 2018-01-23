import { Injectable } from '@angular/core';
import { Style } from './style';
import { MapStyles } from './mock-styles';

@Injectable()
export class PosterService {

  getStyles(): Style[] {
    return MapStyles;
  }

  constructor() { }

}
