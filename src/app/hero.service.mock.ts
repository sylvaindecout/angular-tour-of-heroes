import {Hero} from "./hero";
import {Observable, of} from "rxjs";

export class MockHeroService {

  getHeroes(): Observable<Hero[]> {
    return of([]);
  }

  getHero() {
    return of({});
  }

}
