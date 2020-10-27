import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowtablePage } from './showtable.page';

describe('ShowtablePage', () => {
  let component: ShowtablePage;
  let fixture: ComponentFixture<ShowtablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowtablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
