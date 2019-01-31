import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnColorSelectorComponent } from './turn-color-selector.component';

describe('TurnColorSelectorComponent', () => {
  let component: TurnColorSelectorComponent;
  let fixture: ComponentFixture<TurnColorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnColorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnColorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
