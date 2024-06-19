import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ApifinancasPage } from './apifinancas.page';

describe('ApifinancasPage', () => {
  let component: ApifinancasPage;
  let fixture: ComponentFixture<ApifinancasPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ApifinancasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApifinancasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




