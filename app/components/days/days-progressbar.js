import Ember from 'ember';

export default Ember.Component.extend({
  daysService: Ember.inject.service('days-service'),

  didInsertElement() {
    let progress = this.get('daysService').getProgress();
    this.set('progress', progress);
  },

  progressObserver: Ember.observer('daysService.progress', function() {
    let progress = this.get('daysService').getProgress();
    this.set('progress', progress);
  })

});