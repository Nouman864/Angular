import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarriageprofilePage } from './marriageprofile.page';

describe('MarriageprofilePage', () => {
  let component: MarriageprofilePage;
  let fixture: ComponentFixture<MarriageprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarriageprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
