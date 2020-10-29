import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddhallPage } from './addhall.page';

describe('AddhallPage', () => {
  let component: AddhallPage;
  let fixture: ComponentFixture<AddhallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddhallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
