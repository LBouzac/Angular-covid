import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomesComponent } from './symptomes.component';

describe('SymptomesComponent', () => {
  let component: SymptomesComponent;
  let fixture: ComponentFixture<SymptomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymptomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymptomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
