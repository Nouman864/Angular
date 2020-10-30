import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchhallPage } from './searchhall.page';

describe('SearchhallPage', () => {
  let component: SearchhallPage;
  let fixture: ComponentFixture<SearchhallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchhallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchhallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
