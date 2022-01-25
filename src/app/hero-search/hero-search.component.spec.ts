import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroSearchComponent} from './hero-search.component';
import {MockHeroService} from "../hero.service.mock";
import {HeroService} from "../hero.service";

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      providers: [{provide: HeroService, useClass: MockHeroService}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
