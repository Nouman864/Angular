import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtablePage } from './addtable.page';

describe('AddtablePage', () => {
  let component: AddtablePage;
  let fixture: ComponentFixture<AddtablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
