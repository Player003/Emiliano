import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMmonedasComponent } from './abmmonedas.component';

describe('ABMmonedasComponent', () => {
  let component: ABMmonedasComponent;
  let fixture: ComponentFixture<ABMmonedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABMmonedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMmonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
