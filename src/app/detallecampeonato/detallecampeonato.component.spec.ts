import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecampeonatoComponent } from './detallecampeonato.component';

describe('DetallecampeonatoComponent', () => {
  let component: DetallecampeonatoComponent;
  let fixture: ComponentFixture<DetallecampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
