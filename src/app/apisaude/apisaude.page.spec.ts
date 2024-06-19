import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ApisaudePage } from './apisaude.page';

describe('ApisaudePage', () => {
  let component: ApisaudePage;
  let fixture: ComponentFixture<ApisaudePage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ApisaudePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApisaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




