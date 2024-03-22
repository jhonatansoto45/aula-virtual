import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  viewSearch: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/cuv/cursos') {
      this.viewSearch = true;
    }
  }
}
