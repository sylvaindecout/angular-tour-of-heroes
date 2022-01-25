import {Injectable} from '@angular/core';

import {catchError, Observable, of, tap} from 'rxjs';

import {Hero} from './hero';
import {MessageService} from './message.service';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // This should send the error to remote logging infrastructure. Logs to console instead.
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
