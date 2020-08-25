import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfugiumCoreComponent } from './perfugium-core.component';

describe('PerfugiumCoreComponent', () => {
  let component: PerfugiumCoreComponent;
  let fixture: ComponentFixture<PerfugiumCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfugiumCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfugiumCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
