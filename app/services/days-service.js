import Ember from 'ember';

export default Ember.Service.extend({
  progress: 0,

    getProgress() {
      return this.get('progress');
    },
    setProgress(percentage) {
      this.set('progress', percentage);
    }
});
