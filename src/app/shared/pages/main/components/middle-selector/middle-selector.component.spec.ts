import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSelectorComponent } from './middle-selector.component';

describe('MiddleSelectorComponent', () => {
  let component: MiddleSelectorComponent;
  let fixture: ComponentFixture<MiddleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
