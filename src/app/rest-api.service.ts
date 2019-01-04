import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { catchError, tap,  map } from 'rxjs/operators';
import { Beer } from './beer';



const apiUrl = "https://beers-cf53e.firebaseio.com/beers.json";
@Injectable({ providedIn: 'root' })

export class RestApiService {

  addBeer(beer: Beer): Observable<Beer> {
    let url = `https://beers-cf53e.firebaseio.com/beers.json`;
    return this.http.post<Beer>(url, beer, {responseType: 'json'}).pipe(
      tap((product: Beer) => console.log('beer added')),
      catchError(this.handleError<Beer>('addBeer'))
    );
} 
  constructor(private http: HttpClient) { }


private extractData(res: Response) {
  let body = res;
  return body || { };
}
getBeerByKey(key: string): Observable<Beer[]>{
  console.log('https://beers-cf53e.firebaseio.com/beers/'+key+'.json')
  return this.http.get<Beer[]>('https://beers-cf53e.firebaseio.com/beers/'+key+'.json')
  .pipe(
    tap(data => JSON.stringify(data)),
    catchError(this.handleError('getBeerByKey', []))
  );
}

getBeers(): Observable<Beer[]> {
  return this.http.get<Beer[]>
  ('https://beers-cf53e.firebaseio.com/beers.json')
      .pipe(tap(data => data),
          catchError(this.handleError("getBeers", []))
      );
}

/**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
          return (error);
      };
  }


}
