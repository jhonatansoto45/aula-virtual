import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { Tab } from '../../../interfaces/aula-virtual.interfaces';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements AfterViewInit {
  tabActive: number = Tab.curso;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get tab() {
    return Tab;
  }

  ngAfterViewInit(): void {
    this.tabActiveClass();
  }

  tabControl(tab: Tab) {
    this.tabActive = tab;
    this.tabActiveClass();
  }

  private tabActiveClass(): void {
    const tabs = this.document.querySelectorAll('.nav__item');
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
    tabs[this.tabActive].classList.add('active-tab');
  }
}
