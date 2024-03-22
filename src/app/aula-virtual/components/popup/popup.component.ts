import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @ViewChild('backdrop') backdrop!: ElementRef;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  safeURL: SafeUrl = '';

  constructor(private sanitazer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeURL = this.sanitazer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/watch?v=2G7bII2T-ec&embedded=true'
    );
  }

  exit(event: MouseEvent): void {
    const element = this.backdrop.nativeElement as HTMLElement;

    if (event.target === element) this.onClose.emit(true);
  }
}
