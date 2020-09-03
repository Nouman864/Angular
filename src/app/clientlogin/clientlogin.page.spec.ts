import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientloginPage } from './clientlogin.page';

describe('ClientloginPage', () => {
  let component: ClientloginPage;
  let fixture: ComponentFixture<ClientloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
