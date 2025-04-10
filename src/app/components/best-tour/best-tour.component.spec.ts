import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestTourComponent } from './best-tour.component';

describe('BestTourComponent', () => {
  let component: BestTourComponent;
  let fixture: ComponentFixture<BestTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
