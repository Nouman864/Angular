import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlatprofilePage } from './flatprofile.page';

describe('FlatprofilePage', () => {
  let component: FlatprofilePage;
  let fixture: ComponentFixture<FlatprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlatprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
