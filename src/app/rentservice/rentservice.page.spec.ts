import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentservicePage } from './rentservice.page';

describe('RentservicePage', () => {
  let component: RentservicePage;
  let fixture: ComponentFixture<RentservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
