import Ember from 'ember';

export default Ember.Route.extend({
  daysService: Ember.inject.service('days-service'),

  model() {
    let days = this.get('daysService').getDays();
    let daysUntilChristmas = 25;

    return {
      days: days,
      daysUntilChristmas: daysUntilChristmas
    };
  }
});
