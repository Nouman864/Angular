import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddhotelPage } from './addhotel.page';

describe('AddhotelPage', () => {
  let component: AddhotelPage;
  let fixture: ComponentFixture<AddhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
