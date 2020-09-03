import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpropertyPage } from './viewproperty.page';

describe('ViewpropertyPage', () => {
  let component: ViewpropertyPage;
  let fixture: ComponentFixture<ViewpropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpropertyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
