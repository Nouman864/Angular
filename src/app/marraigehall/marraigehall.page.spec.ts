import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarraigehallPage } from './marraigehall.page';

describe('MarraigehallPage', () => {
  let component: MarraigehallPage;
  let fixture: ComponentFixture<MarraigehallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarraigehallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarraigehallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
