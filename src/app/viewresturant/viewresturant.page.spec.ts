import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewresturantPage } from './viewresturant.page';

describe('ViewresturantPage', () => {
  let component: ViewresturantPage;
  let fixture: ComponentFixture<ViewresturantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewresturantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewresturantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
