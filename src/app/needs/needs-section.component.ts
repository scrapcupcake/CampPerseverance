import { Component, Input } from '@angular/core';

@Component({
  selector: 'needs-section',
  styles: [`
  
  section {
      padding: 10px;
      padding-top: 0px;
      margin:5px 0px;
      }

      section.Urgent {
        border-style: solid;
        border-width: 27px 27px 31px;
        -webkit-border-image: url(../assets/images/Needs1.png) 27 27 31 repeat;
           -moz-border-image: url(../assets/images/Needs1.png) 27 27 31 repeat;
             -o-border-image: url(../assets/images/Needs1.png) 27 27 31 repeat;
                border-image: url(../assets/images/Needs1.png) 27 27 31 fill repeat;
      }
      section.Moderate{
        border-style: solid;
        border-width: 27px 27px 31px;
        -webkit-border-image: url(../assets/images/Needs2.png) 27 27 31 repeat;
           -moz-border-image: url(../assets/images/Needs2.png) 27 27 31 repeat;
             -o-border-image: url(../assets/images/Needs2.png) 27 27 31 repeat;
                border-image: url(../assets/images/Needs2.png) 27 27 31 fill repeat;
      }
      section.Basic{
        border-style: solid;
        border-width: 27px 27px 31px;
        -webkit-border-image: url(../assets/images/Needs3.png) 27 27 31 repeat;
           -moz-border-image: url(../assets/images/Needs3.png) 27 27 31 repeat;
             -o-border-image: url(../assets/images/Needs3.png) 27 27 31 repeat;
                border-image: url(../assets/images/Needs3.png) 27 27 31 fill repeat;
      }
      section.Wishful{
        border-style: solid;
        border-width: 27px 27px 31px;
        -webkit-border-image: url(../assets/images/Needs4.png) 27 27 31 repeat;
           -moz-border-image: url(../assets/images/Needs4.png) 27 27 31 repeat;
             -o-border-image: url(../assets/images/Needs4.png) 27 27 31 repeat;
                border-image: url(../assets/images/Needs4.png) 27 27 31 fill repeat;
      }
    h1 { 
      position:relative;
      left:-1vw;
      -webkit-text-stroke: 1px black;
      color: white;
      text-shadow:
         3px 3px 0 #000,
        -1px -1px 0 #000,  
         1px -1px 0 #000,
        -1px 1px 0 #000,
         1px 1px 0 #000;
      font-size: 3.5vh;
    }
    h2{
      color:white;
      margin:0px;
      font-size:2vh;
      font-style: oblique;
    }
  `],
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