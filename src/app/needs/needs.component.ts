import { Component } from '@angular/core';
import {NeedsSection} from './needs-section.component';
import {NeedsItem} from './needs-item.component';

@Component({
  selector: 'needs',
  directives: [NeedsSection, NeedsItem],
  styles: [`
  .TwoFlex{
    display: flex;
    display: -webkit-flex;
    align-items: stretch;
    align-content: stretch;
    flex-wrap: wrap;
    }
    needs-section{
      flex: 1 0 400px;
      
    }
  `],
  templateUrl:'./needs.template.html' 
})
export class Needs {
  
}
