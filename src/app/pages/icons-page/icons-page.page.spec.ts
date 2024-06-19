import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsPagePage } from './icons-page.page';

describe('IconsPagePage', () => {
  let component: IconsPagePage;
  let fixture: ComponentFixture<IconsPagePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(IconsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
