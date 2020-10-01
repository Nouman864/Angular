import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymenthotelPage } from './paymenthotel.page';

describe('PaymenthotelPage', () => {
  let component: PaymenthotelPage;
  let fixture: ComponentFixture<PaymenthotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenthotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymenthotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
