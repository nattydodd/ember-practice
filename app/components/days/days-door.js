import Ember from 'ember';

export default Ember.Component.extend({
  daysService: Ember.inject.service('days-service'),
  lastDoor: false,


  calculatePercentage(id) {
    let percentage = id / 25 * 100;
    return percentage;
  },

  calculateDaysLeft(id) {
    let daysLeft = 25 - id;
    return daysLeft;
  },

  actions: {

    toggleOpen(id) {
      if ($(`#door${id}`).hasClass("days__list__item__door__inner--open")) {
        this.get('daysService').setProgress(this.calculatePercentage(id - 1));
        $(`#door${id}`).toggleClass("days__list__item__door__inner--open");
        this.set('daysUntilChristmas', this.calculateDaysLeft(id - 1));
      } else {
        this.get('daysService').setProgress(this.calculatePercentage(id));
        $(`#door${id}`).toggleClass("days__list__item__door__inner--open");
        this.set('daysUntilChristmas', this.calculateDaysLeft(id));
      }
    }

  }
});