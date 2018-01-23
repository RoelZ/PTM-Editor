import { Injectable } from '@angular/core';
import { Style } from './style';
import { MapStyles } from './mock-styles';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class PosterService {

  /*
  getStyles(): Style[] {
    return MapStyles;
  }
*/
  constructor(private messageService: MessageService) { }
  
  getStyles(): Observable<Style[]> {
    // Todo: bericht versturen _na_ het ophalen van de heroes
    this.messageService.add('posterService: Alle styles opgehaald');
    return of(MapStyles);
}

}
