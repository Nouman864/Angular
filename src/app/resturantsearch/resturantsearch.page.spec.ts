import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResturantsearchPage } from './resturantsearch.page';

describe('ResturantsearchPage', () => {
  let component: ResturantsearchPage;
  let fixture: ComponentFixture<ResturantsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantsearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResturantsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
