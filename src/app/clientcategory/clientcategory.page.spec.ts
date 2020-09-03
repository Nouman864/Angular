import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientcategoryPage } from './clientcategory.page';

describe('ClientcategoryPage', () => {
  let component: ClientcategoryPage;
  let fixture: ComponentFixture<ClientcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
