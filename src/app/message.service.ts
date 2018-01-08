import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = []; // lege string array voor berichten

  // toevoegen van een bericht
  add(message: string) {
    this.messages.push(message);
  }

  // verwijderen van een bericht
  clear(){
    this.messages = [];
  }  

}
