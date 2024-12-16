import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloginComponent } from './alogin.component';
import { AnavComponent } from '../anav/anav.component';

describe('AloginComponent', () => {
  let component: AloginComponent;
  let fixture: ComponentFixture<AloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
