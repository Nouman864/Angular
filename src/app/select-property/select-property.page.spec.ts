import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPropertyPage } from './select-property.page';

describe('SelectPropertyPage', () => {
  let component: SelectPropertyPage;
  let fixture: ComponentFixture<SelectPropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPropertyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
