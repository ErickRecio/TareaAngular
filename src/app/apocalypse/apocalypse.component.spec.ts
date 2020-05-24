import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApocalypseComponent } from './apocalypse.component';

describe('ApocalypseComponent', () => {
  let component: ApocalypseComponent;
  let fixture: ComponentFixture<ApocalypseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApocalypseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApocalypseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
