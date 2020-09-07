import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymenttokenPage } from './paymenttoken.page';

describe('PaymenttokenPage', () => {
  let component: PaymenttokenPage;
  let fixture: ComponentFixture<PaymenttokenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenttokenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymenttokenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
