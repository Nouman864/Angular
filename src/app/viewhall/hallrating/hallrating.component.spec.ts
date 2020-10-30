import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HallratingComponent } from './hallrating.component';

describe('HallratingComponent', () => {
  let component: HallratingComponent;
  let fixture: ComponentFixture<HallratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallratingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HallratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
