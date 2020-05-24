import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasicaComponent } from './clasica.component';

describe('ClasicaComponent', () => {
  let component: ClasicaComponent;
  let fixture: ComponentFixture<ClasicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
