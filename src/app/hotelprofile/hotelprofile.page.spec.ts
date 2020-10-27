import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelprofilePage } from './hotelprofile.page';

describe('HotelprofilePage', () => {
  let component: HotelprofilePage;
  let fixture: ComponentFixture<HotelprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
