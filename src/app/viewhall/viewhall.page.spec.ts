import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewhallPage } from './viewhall.page';

describe('ViewhallPage', () => {
  let component: ViewhallPage;
  let fixture: ComponentFixture<ViewhallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewhallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
