import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetresturantPage } from './getresturant.page';

describe('GetresturantPage', () => {
  let component: GetresturantPage;
  let fixture: ComponentFixture<GetresturantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetresturantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetresturantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
