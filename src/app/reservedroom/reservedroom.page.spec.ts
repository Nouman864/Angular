import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservedroomPage } from './reservedroom.page';

describe('ReservedroomPage', () => {
  let component: ReservedroomPage;
  let fixture: ComponentFixture<ReservedroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservedroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
