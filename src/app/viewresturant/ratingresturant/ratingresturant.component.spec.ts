import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingresturantComponent } from './ratingresturant.component';

describe('RatingresturantComponent', () => {
  let component: RatingresturantComponent;
  let fixture: ComponentFixture<RatingresturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingresturantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingresturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
