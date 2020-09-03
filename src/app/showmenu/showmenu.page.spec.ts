import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowmenuPage } from './showmenu.page';

describe('ShowmenuPage', () => {
  let component: ShowmenuPage;
  let fixture: ComponentFixture<ShowmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
