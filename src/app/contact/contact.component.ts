import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`contact` component loaded asynchronously');

@Component({
  selector: 'contact',
  styles: [`
  `],
  template: `
    <h1>Contact Us</h1>
    <div>The best way to contact us is by phone, which we'll answer 24/7.  Our camp coordinator will answer emails within one day, and you can stop by to tour the camp, drop off donations, or come by and chat any day between 9am and 8pm.
    </div>
    <div class="TwoColumn">
      <h2>Phone: (555)555-5555</h2>
      <h2>Email: CampWackyPants@gmail.com</h2>
    </div>
    <div>
      <h3>Current Location:</h3>
      32 Wallaby Way, Seattle WA 98168
    </div>
  `
})
export class Contact {
  localState;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `contact` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);`
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}
