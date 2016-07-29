import { Component, Input } from '@angular/core';

@Component({
  selector: 'needs-section',
  styles: [`
  section {
      border-radius: 30px 30px 0px 0px;
      border: 1px solid black;
      box-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58),0px 3px 0px rgba(51, 51, 51, 0.51);
  }
h1 { 
    border-radius: 30px 30px 0px 0px;
    padding: 20px 20px 0px 20px;
    
    color: white;
    height: 50px;
    margin: 0px;
}
  
  h1.Urgent {
background: #b50000; /* Old browsers */
background: -moz-linear-gradient(top, #b50000 0%, #b50000 54%, #ffffff 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #b50000 0%,#b50000 54%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #b50000 0%,#b50000 54%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b50000', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
}
h1.Basic {
background: #0fe500; /* Old browsers */
background: -moz-linear-gradient(top, #0fe500 0%, #0fe500 54%, #ffffff 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #0fe500 0%,#0fe500 54%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #0fe500 0%,#0fe500 54%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0fe500', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
copy
}
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