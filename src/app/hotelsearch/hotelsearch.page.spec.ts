import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelsearchPage } from './hotelsearch.page';

describe('HotelsearchPage', () => {
  let component: HotelsearchPage;
  let fixture: ComponentFixture<HotelsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
