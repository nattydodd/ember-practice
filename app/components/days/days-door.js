import Ember from 'ember';

export default Ember.Component.extend({
  daysService: Ember.inject.service('days-service'),

  calculatePercentage(id) {
    let percentage = id / 25 * 100;
    return percentage;
  },

  actions: {

    toggleOpen(id) {
      console.log('open');
      this.get('daysService').setProgress(calculatePercentage(id));
    }

  }
});