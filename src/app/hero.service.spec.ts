import {TestBed} from '@angular/core/testing';

import {HeroService} from './hero.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {MessageService} from "./message.service";

describe('HeroService', () => {
  let service: HeroService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        MessageService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
