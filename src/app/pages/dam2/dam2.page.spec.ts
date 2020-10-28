import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DAM2Page } from './dam2.page';

describe('DAM2Page', () => {
  let component: DAM2Page;
  let fixture: ComponentFixture<DAM2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAM2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DAM2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
