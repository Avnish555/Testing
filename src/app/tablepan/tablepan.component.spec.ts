import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepanComponent } from './tablepan.component';

describe('TablepanComponent', () => {
  let component: TablepanComponent;
  let fixture: ComponentFixture<TablepanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablepanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
