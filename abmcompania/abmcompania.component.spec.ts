import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMcompaniaComponent } from './abmcompania.component';

describe('ABMcompaniaComponent', () => {
  let component: ABMcompaniaComponent;
  let fixture: ComponentFixture<ABMcompaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABMcompaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMcompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
