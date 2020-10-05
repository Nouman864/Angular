import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookinglistPage } from './bookinglist.page';

describe('BookinglistPage', () => {
  let component: BookinglistPage;
  let fixture: ComponentFixture<BookinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
