import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFoyerComponent } from './liste-foyer.component';

describe('ListeFoyerComponent', () => {
  let component: ListeFoyerComponent;
  let fixture: ComponentFixture<ListeFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
