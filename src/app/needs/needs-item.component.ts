import { Component, Input } from '@angular/core';

@Component({
  selector: 'needs-item',
  styles: [`
  div.lower-box{
    display: flex;
    display: webkit-flex;
    justify-content: space-between;
    margin:0px;
  }
  p{
    margin:0px;
  }
  h3{
    margin:0px;
    margin-top:5px;
  }

  .usage {
      font-weight: bold;
  }
  `],
  template:`
  <div>
  <h3>{{title}}</h3>
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