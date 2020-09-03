import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewhotelPage } from './viewhotel.page';

describe('ViewhotelPage', () => {
  let component: ViewhotelPage;
  let fixture: ComponentFixture<ViewhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
