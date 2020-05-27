import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GituserCardComponent } from './gituser-card.component';

describe('GituserCardComponent', () => {
  let component: GituserCardComponent;
  let fixture: ComponentFixture<GituserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GituserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GituserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
