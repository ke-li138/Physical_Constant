import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConstantComponent } from './new-constant.component';

describe('NewConstantComponent', () => {
  let component: NewConstantComponent;
  let fixture: ComponentFixture<NewConstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewConstantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
