import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { code } from './code.component';

describe('code', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    // provide a better mock
    {
      provide: ActivatedRoute,
      useValue: {
        data: {
          subscribe: (fn) => fn({yourData: 'yolo'})
        }
      }
    },
    code
  ]);

  it('should log ngOnInit', inject([ code ], (code) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    code.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
