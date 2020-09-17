import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { MOCK_CHARACTER } from '../mock/mock-character';
import { Character } from '../model/character';

describe('CharacterService', () => {
  let service: CharacterService;
  let mockCharacter: Character = MOCK_CHARACTER;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharacterService
      ]
    });
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a character', () => {
    service.save(mockCharacter, 'characterId').subscribe((result) => {
      expect(result).toEqual(mockCharacter);
    });
  });

  it('should load a character', () => {
    localStorage.setItem('characterId', JSON.stringify( mockCharacter ));

    service.load('characterId').subscribe((result) => {
      expect(result).toEqual(mockCharacter);
    });

  });

  it('should delete a character', () => {

  });

  it('should create a character', () => {

  });

  it('should list characters', () => {

  });

});
