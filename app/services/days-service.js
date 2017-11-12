import Ember from 'ember';

export default Ember.Service.extend({
  progress: 0,

    getProgress() {
      return this.get('progress');
    },
    setProgress(percentage) {
      this.set('progress', percentage);
    },
    getDays() {
      // this can be refactored
      const days = [];
      for (let i = 1; i < 26; i++) {
        days.push(i);
      }
      return days;
    }
});
