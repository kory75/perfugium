import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../model/character';

// @Injectable({
//  providedIn: 'root'
// })
export class CharacterService {

  constructor() { }

  public save(character: Character, id: string): Observable<Character> {
    return of(character);
  }

  public load(id: string): Observable<Character> {
    return of(JSON.parse(localStorage.getItem(id)));
  }
}
