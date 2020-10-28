import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FCTPage } from './fct.page';

describe('FCTPage', () => {
  let component: FCTPage;
  let fixture: ComponentFixture<FCTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FCTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
