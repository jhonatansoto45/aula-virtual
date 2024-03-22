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
      'https://youtu.be/2G7bII2T-ec?si=VtlSto58LZ_IgbTe'
    );
  }

  exit(event: MouseEvent | undefined, closed = false): void {
    const element = this.backdrop.nativeElement as HTMLElement;
    if (closed || event?.target === element) this.onClose.emit(true);
  }
}
