import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodouserdetailsComponent } from './todouserdetails.component';

describe('TodouserdetailsComponent', () => {
  let component: TodouserdetailsComponent;
  let fixture: ComponentFixture<TodouserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodouserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodouserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
