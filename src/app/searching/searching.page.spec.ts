import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchingPage } from './searching.page';

describe('SearchingPage', () => {
  let component: SearchingPage;
  let fixture: ComponentFixture<SearchingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
