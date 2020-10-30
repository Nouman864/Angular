import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HallbookingPage } from './hallbooking.page';

describe('HallbookingPage', () => {
  let component: HallbookingPage;
  let fixture: ComponentFixture<HallbookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallbookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HallbookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
