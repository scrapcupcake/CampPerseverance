import { Component, Input } from '@angular/core';

@Component({
  selector: 'needs-item',
  styles: [`
  div.lower-box{
    display: flex;
    display: webkit-flex;
    justify-content: space-between;
  }

  .description{
      font-size: small;
  }

  .usage {
      font-weight: bold;
  }
  `],
  template:`
  <div>
  <h1>{{title}}</h1>
  <div class="lower-box">
    <p class="description">{{desc}}</p>
    <p class="usage">{{usage}}</p>
  </div>
  </div>
  ` 
})
export class NeedsItem {
  @Input() title : string;
  @Input() desc : string;
  @Input() usage : string;
}