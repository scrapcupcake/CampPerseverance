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
import { Who } from './who.component';

describe('who', () => {
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
    Who
  ]);

  it('should log ngOnInit', inject([ Who ], (who) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    who.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
