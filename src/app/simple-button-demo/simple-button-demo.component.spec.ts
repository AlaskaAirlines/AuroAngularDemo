import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonDemoComponent } from './simple-button-demo.component';

describe('SimpleButtonDemoComponent', () => {
  let component: SimpleButtonDemoComponent;
  let fixture: ComponentFixture<SimpleButtonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleButtonDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
