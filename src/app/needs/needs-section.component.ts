import { Component, Input } from '@angular/core';

@Component({
  selector: 'needs-section',
  styleUrls: ['./needs-section.css'],
  template:`
  <section [class]="class">
  <h1>{{title}}</h1>
  <h2>{{desc}}</h2>
  <ng-content></ng-content>
  </section> ` 
})
export class NeedsSection {
  @Input() class: string;
  @Input() title : string;
  @Input() desc : string;
}