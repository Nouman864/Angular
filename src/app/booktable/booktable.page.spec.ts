import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BooktablePage } from './booktable.page';

describe('BooktablePage', () => {
  let component: BooktablePage;
  let fixture: ComponentFixture<BooktablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooktablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
