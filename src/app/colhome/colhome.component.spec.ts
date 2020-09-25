import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColhomeComponent } from './colhome.component';

describe('ColhomeComponent', () => {
  let component: ColhomeComponent;
  let fixture: ComponentFixture<ColhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
