import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]', // remember, square brackets are used for attribute selectors, and omit them for element selectors
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#274472';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
