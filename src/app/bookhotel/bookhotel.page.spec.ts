import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookhotelPage } from './bookhotel.page';

describe('BookhotelPage', () => {
  let component: BookhotelPage;
  let fixture: ComponentFixture<BookhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookhotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
