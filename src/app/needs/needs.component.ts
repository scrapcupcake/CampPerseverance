import { Component } from '@angular/core';
import {NeedsSection} from './needs-section.component';
import {NeedsItem} from './needs-item.component';

@Component({
  selector: 'needs',
  directives: [NeedsSection, NeedsItem],
  styles: [`./needs.scss`],
  templateUrl:'./needs.template.html' 
})
export class Needs {
  
}
