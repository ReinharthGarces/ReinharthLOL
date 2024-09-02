import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitleStyle]'
})
export class AppTitleSizeDirective implements OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#D9E0A4');
    this.renderer.setStyle(this.el.nativeElement, 'font-family', 'Kaushan Script');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '800');
    this.renderer.setStyle(this.el.nativeElement, 'text-shadow', '1px 1px 2px rgba(0, 0, 0, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.2);');
  }
}