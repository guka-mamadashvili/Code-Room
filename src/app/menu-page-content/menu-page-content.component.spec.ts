import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPageContentComponent } from './menu-page-content.component';

describe('MenuPageContentComponent', () => {
  let component: MenuPageContentComponent;
  let fixture: ComponentFixture<MenuPageContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPageContentComponent]
    });
    fixture = TestBed.createComponent(MenuPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
