import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientverifyPage } from './clientverify.page';

describe('ClientverifyPage', () => {
  let component: ClientverifyPage;
  let fixture: ComponentFixture<ClientverifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientverifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
