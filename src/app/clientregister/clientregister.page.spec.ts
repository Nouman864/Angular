import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientregisterPage } from './clientregister.page';

describe('ClientregisterPage', () => {
  let component: ClientregisterPage;
  let fixture: ComponentFixture<ClientregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
