import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DAM1Page } from './dam1.page';

describe('DAM1Page', () => {
  let component: DAM1Page;
  let fixture: ComponentFixture<DAM1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAM1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DAM1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
