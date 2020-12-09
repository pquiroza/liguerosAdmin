import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColequiposComponent } from './colequipos.component';

describe('ColequiposComponent', () => {
  let component: ColequiposComponent;
  let fixture: ComponentFixture<ColequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
