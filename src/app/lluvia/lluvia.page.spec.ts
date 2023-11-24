import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LluviaPage } from './lluvia.page';

describe('LluviaPage', () => {
  let component: LluviaPage;
  let fixture: ComponentFixture<LluviaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LluviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
