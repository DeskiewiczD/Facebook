import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import debug from 'debug';

const console = {
  log: debug('facebook:highlight:log'),
  warn: debug('facebook:highlight:warn'),
  error: debug('facebook:highlight:error')
};

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') mouseOverHandler() {
    console.log('mouseover');
    const $element = this.element.nativeElement;
    this.renderer.addClass($element, 'border');
    this.renderer.addClass($element, 'border-primary');
  }

  @HostListener('mouseleave') mouseLeaveHandler() {
    console.log('mouseLeave');
    const $element = this.element.nativeElement;
    this.renderer.removeClass($element, 'border');
    this.renderer.removeClass($element, 'border-primary');
  }
}
