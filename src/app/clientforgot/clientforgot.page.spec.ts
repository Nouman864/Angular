import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientforgotPage } from './clientforgot.page';

describe('ClientforgotPage', () => {
  let component: ClientforgotPage;
  let fixture: ComponentFixture<ClientforgotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientforgotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientforgotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
