import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmenuPage } from './addmenu.page';

describe('AddmenuPage', () => {
  let component: AddmenuPage;
  let fixture: ComponentFixture<AddmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
