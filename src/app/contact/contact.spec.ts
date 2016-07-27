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
import { contact } from './contact.component';

describe('contact', () => {
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
    contact
  ]);

  it('should log ngOnInit', inject([ contact ], (contact) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    contact.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
