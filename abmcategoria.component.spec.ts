import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMcategoriaComponent } from './abmcategoria.component';

describe('ABMcategoriaComponent', () => {
  let component: ABMcategoriaComponent;
  let fixture: ComponentFixture<ABMcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABMcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
