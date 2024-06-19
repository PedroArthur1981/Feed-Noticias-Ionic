import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ApicienciaPage } from './apiciencia.page';

describe('ApicienciaPage', () => {
  let component: ApicienciaPage;
  let fixture: ComponentFixture<ApicienciaPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ApicienciaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApicienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
