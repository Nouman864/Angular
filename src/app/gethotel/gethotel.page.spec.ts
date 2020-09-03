import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GethotelPage } from './gethotel.page';

describe('GethotelPage', () => {
  let component: GethotelPage;
  let fixture: ComponentFixture<GethotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GethotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GethotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
