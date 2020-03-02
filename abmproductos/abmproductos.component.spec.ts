import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMproductosComponent } from './abmproductos.component';

describe('ABMproductosComponent', () => {
  let component: ABMproductosComponent;
  let fixture: ComponentFixture<ABMproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABMproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
