import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaComponent } from './receita.component';

describe('ReceitaComponent', () => {
  let component: ReceitaComponent;
  let fixture: ComponentFixture<ReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
