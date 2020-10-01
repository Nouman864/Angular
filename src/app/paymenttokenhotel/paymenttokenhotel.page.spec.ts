import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymenttokenhotelPage } from './paymenttokenhotel.page';

describe('PaymenttokenhotelPage', () => {
  let component: PaymenttokenhotelPage;
  let fixture: ComponentFixture<PaymenttokenhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenttokenhotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymenttokenhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
