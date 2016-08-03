import { Component, Input } from '@angular/core';

@Component({
  selector: 'needs-item',
  styleUrls: ['./needs-item.css'],
  template:`
  <div>
  <h3 [class]="class">{{title}}</h3>
  <div class="lower-box">
    <p class="description">{{desc}}</p>
    <p class="usage">{{usage}}</p>
  </div>
  </div>
  ` 
})
export class NeedsItem {
  @Input() class: string = "";
  @Input() title : string = "";
  @Input() desc : string = "";
  @Input() usage : string = "";
}