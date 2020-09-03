import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookroomPage } from './bookroom.page';

describe('BookroomPage', () => {
  let component: BookroomPage;
  let fixture: ComponentFixture<BookroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
