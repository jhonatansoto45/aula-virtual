import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardItemI,
  CarouselDataI,
  SectionHomeE,
  SocialItemI,
} from '../../interfaces/aula-virtual.interfaces';
import { cardData, carouselData, socialData } from './home.default';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('nav', { static: true }) navigatorRef!: ElementRef;

  images: CarouselDataI[] = carouselData;
  cards: CardItemI[] = cardData;
  social: SocialItemI[] = socialData;
  activeMenu: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const nav = this.navigatorRef.nativeElement as HTMLElement;

    if (event.target.innerWidth > 500 && nav.classList?.contains('hidden')) {
      nav.classList?.remove('hidden');
      this.activeMenu = false;
    }
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  get sections() {
    return SectionHomeE;
  }

  login():void {
    this.router.navigate(['/login']);
  }

  openMenu(active: boolean): void {
    this.activeMenu = !active;

    const nav = this.navigatorRef.nativeElement as HTMLElement;

    if (nav.classList.contains('hidden')) {
      nav.classList.remove('hidden');
    } else {
      nav.classList.add('hidden');
    }
  }

  scrollToContain(section: SectionHomeE): void {
    const container = this.document.getElementById(section);
    container?.scrollIntoView({ behavior: 'smooth' });
    if (this.activeMenu) this.openMenu(true);
  }
}
