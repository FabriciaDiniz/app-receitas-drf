import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteComponent } from './ingrediente.component';

describe('IngredienteComponent', () => {
  let component: IngredienteComponent;
  let fixture: ComponentFixture<IngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
