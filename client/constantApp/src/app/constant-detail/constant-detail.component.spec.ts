import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantDetailComponent } from './constant-detail.component';

describe('ConstantDetailComponent', () => {
  let component: ConstantDetailComponent;
  let fixture: ComponentFixture<ConstantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstantDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
