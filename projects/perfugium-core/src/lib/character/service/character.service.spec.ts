import {async, TestBed} from '@angular/core/testing';

import {CharacterService} from './character.service';
import {MOCK_CHARACTER} from '../mock/mock-character';
import {Character} from '../model/character';

describe('CharacterService::save()', () => {
  let service: CharacterService;
  const mockCharacter: Character = MOCK_CHARACTER;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharacterService
      ]
    });
    service = TestBed.inject(CharacterService);
  });

  afterEach(() => {
    localStorage.removeItem('test-character');
  });

  it('should return the same object as stored in the local storage', async(() => {
    service.save(mockCharacter, 'test-character').subscribe((result) => {
      expect(result).toEqual(JSON.parse(localStorage.getItem('test-character')));
    });
  }));
});
