import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefoyerComponent } from './listefoyer.component';

describe('ListefoyerComponent', () => {
  let component: ListefoyerComponent;
  let fixture: ComponentFixture<ListefoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListefoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
