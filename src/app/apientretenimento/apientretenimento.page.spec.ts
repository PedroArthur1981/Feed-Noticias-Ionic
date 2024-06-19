import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ApientretenimentoPage } from './apientretenimento.page';

describe('ApientretenimentoPage', () => {
  let component: ApientretenimentoPage;
  let fixture: ComponentFixture<ApientretenimentoPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ApientretenimentoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApientretenimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

