import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPageComponent } from './developer-page.component';

describe('DeveloperPageComponent', () => {
  let component: DeveloperPageComponent;
  let fixture: ComponentFixture<DeveloperPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperPageComponent]
    });
    fixture = TestBed.createComponent(DeveloperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
