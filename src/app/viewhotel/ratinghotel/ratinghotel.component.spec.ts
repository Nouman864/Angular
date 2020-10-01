import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatinghotelComponent } from './ratinghotel.component';

describe('RatinghotelComponent', () => {
  let component: RatinghotelComponent;
  let fixture: ComponentFixture<RatinghotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatinghotelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatinghotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
