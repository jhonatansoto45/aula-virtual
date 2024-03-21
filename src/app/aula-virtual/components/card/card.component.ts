import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/app.reducer';
import { CardCourseI } from 'src/app/interfaces/aula-virtual.interfaces';
import { courses } from './data.default';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  courses: CardCourseI[] = [];

  subStore: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subStore = this.store
      .select('ui')
      .subscribe(({ params }) => this.filterCourses(params));
  }

  ngOnDestroy(): void {
    this.subStore.unsubscribe();
  }

  filterCourses(value: string): void {
    if (value === '') this.courses = courses;

    const course = value.toLowerCase().trim();
    this.courses = this.courses.filter(({ title }) =>
      title.toLowerCase().trim().includes(course)
    );
  }
}
