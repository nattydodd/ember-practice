import Ember from 'ember';

export default Ember.Component.extend({
  daysService: Ember.inject.service('days-service'),

  didInsertElement() {
    this.set('progress', this.get('daysService').getProgress);
  }

});