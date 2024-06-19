import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ApifilmesPage } from './apifilmes.page';

describe('ApifilmesPage', () => {
  let component: ApifilmesPage;
  let fixture: ComponentFixture<ApifilmesPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ApifilmesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApifilmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

