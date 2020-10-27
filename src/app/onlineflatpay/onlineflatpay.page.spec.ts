import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlineflatpayPage } from './onlineflatpay.page';

describe('OnlineflatpayPage', () => {
  let component: OnlineflatpayPage;
  let fixture: ComponentFixture<OnlineflatpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineflatpayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineflatpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
