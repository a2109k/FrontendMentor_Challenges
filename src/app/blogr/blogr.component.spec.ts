import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogrComponent } from './blogr.component';

describe('BlogrComponent', () => {
  let component: BlogrComponent;
  let fixture: ComponentFixture<BlogrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
