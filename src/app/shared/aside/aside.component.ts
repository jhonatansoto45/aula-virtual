import { Component, OnInit } from '@angular/core';
import { AsideItem } from 'src/app/interfaces/aula-virtual.interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  listAside: AsideItem[] = [
    {
      icon: 'home',
      text: 'Dashboard',
      path: '/cuv/dashboard',
    },
    {
      icon: 'user',
      text: 'Perfil',
      path: '/cuv/perfil',
    },
    {
      icon: 'server',
      text: 'Cursos',
      path: '/cuv/cursos',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
