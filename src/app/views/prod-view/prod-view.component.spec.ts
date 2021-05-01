import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdViewComponent } from './prod-view.component';

describe('ProdViewComponent', () => {
  let component: ProdViewComponent;
  let fixture: ComponentFixture<ProdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
