import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlinepayPage } from './onlinepay.page';

describe('OnlinepayPage', () => {
  let component: OnlinepayPage;
  let fixture: ComponentFixture<OnlinepayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinepayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlinepayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
