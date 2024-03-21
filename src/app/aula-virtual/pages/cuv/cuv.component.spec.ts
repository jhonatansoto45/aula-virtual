import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuvComponent } from './cuv.component';

describe('CuvComponent', () => {
  let component: CuvComponent;
  let fixture: ComponentFixture<CuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
