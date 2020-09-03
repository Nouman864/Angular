import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetservicePage } from './getservice.page';

describe('GetservicePage', () => {
  let component: GetservicePage;
  let fixture: ComponentFixture<GetservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
