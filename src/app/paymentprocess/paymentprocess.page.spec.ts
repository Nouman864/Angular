import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentprocessPage } from './paymentprocess.page';

describe('PaymentprocessPage', () => {
  let component: PaymentprocessPage;
  let fixture: ComponentFixture<PaymentprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentprocessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
