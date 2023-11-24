import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltiPage } from './ulti.page';

describe('UltiPage', () => {
  let component: UltiPage;
  let fixture: ComponentFixture<UltiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UltiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
