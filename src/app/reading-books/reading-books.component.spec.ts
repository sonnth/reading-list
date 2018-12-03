import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingBooksComponent } from './reading-books.component';

describe('ReadingBooksComponent', () => {
  let component: ReadingBooksComponent;
  let fixture: ComponentFixture<ReadingBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
