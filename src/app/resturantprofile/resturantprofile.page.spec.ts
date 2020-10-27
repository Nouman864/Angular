import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResturantprofilePage } from './resturantprofile.page';

describe('ResturantprofilePage', () => {
  let component: ResturantprofilePage;
  let fixture: ComponentFixture<ResturantprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResturantprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
