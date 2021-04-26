import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTemplateFormComponent } from './home-template-form.component';

describe('HomeTemplateFormComponent', () => {
  let component: HomeTemplateFormComponent;
  let fixture: ComponentFixture<HomeTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
