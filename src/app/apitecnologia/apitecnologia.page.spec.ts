import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ApitecnologiaPage } from './apitecnologia.page';

describe('ApitecnologiaPage', () => {
  let component: ApitecnologiaPage;
  let fixture: ComponentFixture<ApitecnologiaPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ApitecnologiaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApitecnologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
