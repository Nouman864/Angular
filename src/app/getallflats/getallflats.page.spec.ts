import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetallflatsPage } from './getallflats.page';

describe('GetallflatsPage', () => {
  let component: GetallflatsPage;
  let fixture: ComponentFixture<GetallflatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallflatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetallflatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
