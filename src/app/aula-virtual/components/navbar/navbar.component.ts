import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { search } from '../../../ngrx/ui/ui.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private store: Store<AppState>) {}

  search(params: string): void {
    this.store.dispatch(search({ params }));
  }
}
