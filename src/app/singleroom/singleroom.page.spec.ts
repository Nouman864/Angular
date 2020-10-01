import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleroomPage } from './singleroom.page';

describe('SingleroomPage', () => {
  let component: SingleroomPage;
  let fixture: ComponentFixture<SingleroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
