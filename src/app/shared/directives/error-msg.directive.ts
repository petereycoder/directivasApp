import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;

  constructor( private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
