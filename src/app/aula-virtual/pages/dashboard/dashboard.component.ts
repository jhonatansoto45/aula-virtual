import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { listCourses } from 'src/app/auth/login/data.default';
import { courses } from 'src/app/ngrx/aula-virtual/aula-virtual.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //! Remover esto solo para fines de desarrollo
    this.store.select('cuv').subscribe((state) => {
      if (!state.originalCourses.length) {
        this.store.dispatch(courses({ coursesData: listCourses }));
      }
    });
  }
}
