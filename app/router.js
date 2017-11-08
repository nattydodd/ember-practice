import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('questionnaires', {}); // "/questionnaires"
  this.route('questionnaire', {path: 'questionnaire/:id'}); // "/questionnaire/2"
});

export default Router;
