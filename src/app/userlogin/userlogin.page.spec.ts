import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserloginPage } from './userlogin.page';

describe('UserloginPage', () => {
  let component: UserloginPage;
  let fixture: ComponentFixture<UserloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
