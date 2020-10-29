import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddhallmenuPage } from './addhallmenu.page';

describe('AddhallmenuPage', () => {
  let component: AddhallmenuPage;
  let fixture: ComponentFixture<AddhallmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhallmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddhallmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
