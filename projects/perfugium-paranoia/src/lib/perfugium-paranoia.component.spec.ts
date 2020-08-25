import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfugiumParanoiaComponent } from './perfugium-paranoia.component';

describe('PerfugiumParanoiaComponent', () => {
  let component: PerfugiumParanoiaComponent;
  let fixture: ComponentFixture<PerfugiumParanoiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfugiumParanoiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfugiumParanoiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
