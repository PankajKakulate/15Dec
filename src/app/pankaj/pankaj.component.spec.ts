import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PankajComponent } from './pankaj.component';

describe('PankajComponent', () => {
  let component: PankajComponent;
  let fixture: ComponentFixture<PankajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PankajComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PankajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
