import { Component, Input } from '@angular/core';

@Component({
  selector: 'needs-section',
  styles: [`
  section {
      flex: 1 0 50%;
      border-radius: 30px 30px 0px 0px;
      border: 1px solid black;
      box-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58),0px 3px 0px rgba(51, 51, 51, 0.51);
      padding: 10px;
      margin-bottom:10px;
      }
    h1 { 
        border-radius: 30px 30px 0px 0px;
        padding: 10px 20px 10px 20px;
        color: white;
        height: 4vh;
        margin: -10px;
        margin-bottom: 10px;
        font-size: 3.5vh;
    }
    h1.Urgent { background: #b50000; }
    h1.Moderate{ background: #d17b00; }
    h1.Basic { background: #809361; }
    h1.Wishful { background: #2a87ad; }
  `],
  template:`
  <section>
  <h1 [class]="class">{{title}}</h1>
  <ng-content></ng-content>
  </section> ` 
})
export class NeedsSection {
  @Input() class: string;
  @Input() title : string;
}