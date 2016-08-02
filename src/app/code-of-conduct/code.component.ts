import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`code` component loaded asynchronously');

@Component({
  selector: 'code-of-conduct',
  styles: [`
  `],
  template:`
<h1>Code of Conduct</h1>
Press-friendly version of our code of conduct, calling out being a "dry camp"
  ` 
})
export class CodeOfConduct {

}
