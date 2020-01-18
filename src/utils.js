import { ajax } from "rxjs/ajax";
import { Subject } from "rxjs";
import {
  tap,
  switchMap,
  distinctUntilChanged,
  debounceTime,
  startWith,
  endWith,
  mergeMap,
  map,
  filter
} from "rxjs/operators";

const api$ = keyword =>
  ajax.getJSON(`https://pkg-name-api.now.sh/check?pkg=${keyword}`);

export const sub$ = new Subject();
export const loading$ = new Subject();

export const obs$ = sub$.asObservable().pipe(
  filter(searchTerm => searchTerm.length > 1),
  debounceTime(50),
  distinctUntilChanged(),
  switchMap(keyword =>
    api$(keyword).pipe(
      startWith({ isLoading: true }),
      map(x => {
        if (!x.hasOwnProperty("isLoading")) x.isLoading = false;
        return x;
      })
    )
  )
);
