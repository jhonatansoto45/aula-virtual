import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../../../app.reducer';
import { CardCourseI } from '../../../interfaces/aula-virtual.interfaces';
import {
  filterCourse,
  resetFilter,
} from '../../../ngrx/aula-virtual/aula-virtual.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  courses: CardCourseI[] = [];

  subData: Subscription = new Subscription();
  subFilter: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.subData = this.store
      .select('cuv')
      .subscribe(({ filterCourses }) => (this.courses = filterCourses));

    this.subFilter = this.store
      .select('ui')
      .subscribe(({ params }) => this.filterCourses(params));
  }

  ngOnDestroy(): void {
    this.subData.unsubscribe();
    this.subFilter.unsubscribe();
  }

  filterCourses(value: string): void {
    if (value === '') this.store.dispatch(resetFilter());

    this.store.dispatch(filterCourse({ value }));
  }

  navigateCourse(id: number): void {
    this.router.navigate(['/cuv/curso/', String(id)]);
  }
}
