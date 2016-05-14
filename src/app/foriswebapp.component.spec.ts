import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ForiswebappAppComponent } from '../app/foriswebapp.component';

beforeEachProviders(() => [ForiswebappAppComponent]);

describe('App: Foriswebapp', () => {
  it('should create the app',
      inject([ForiswebappAppComponent], (app: ForiswebappAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'foriswebapp works!\'',
      inject([ForiswebappAppComponent], (app: ForiswebappAppComponent) => {
    expect(app.title).toEqual('foriswebapp works!');
  }));
});
