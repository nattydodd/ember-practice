import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('days', {}); // "/days"
  this.route('day', { path: 'day/:id' }); // "/day/2"
  this.route('not-found', { path: '/*path' });
});

export default Router;
