import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PopupComponent } from 'src/app/aula-virtual/components/popup/popup.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent implements OnInit {
  cards: number[] = [1, 2, 3, 4, 5, 6];

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {}

  openComponent(): void {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }

    const component = this.viewContainerRef.createComponent(PopupComponent);

    const sub0 = component.instance.onClose
      .asObservable()
      .subscribe((isClose) => {
        if (isClose) {
          sub0.unsubscribe();
          component.destroy();
        }
      });
  }
}
