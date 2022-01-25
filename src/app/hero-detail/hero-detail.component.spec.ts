import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "../hero.service";
import {MockHeroService} from "../hero.service.mock";
import {RouterTestingModule} from "@angular/router/testing";

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [RouterTestingModule],
      providers: [{provide: HeroService, useClass: MockHeroService}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
