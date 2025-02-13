import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPageComponent } from './person-page.component';

describe('PersonPageComponent', () => {
  let component: PersonPageComponent;
  let fixture: ComponentFixture<PersonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
