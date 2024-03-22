import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { search } from 'src/app/ngrx/ui/ui.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private store: Store<AppState>) {}

  search(params: string): void {
    this.store.dispatch(search({ params }));
  }
}
