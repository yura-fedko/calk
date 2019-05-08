import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrocarComponent } from './electrocar.component';

describe('ElectrocarComponent', () => {
  let component: ElectrocarComponent;
  let fixture: ComponentFixture<ElectrocarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrocarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
