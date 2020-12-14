import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProdComponent } from './descripcion-prod.component';

describe('DescripcionProdComponent', () => {
  let component: DescripcionProdComponent;
  let fixture: ComponentFixture<DescripcionProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
