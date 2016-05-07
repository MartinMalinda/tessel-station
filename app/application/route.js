import Ember from 'ember';

const {RSVP} = Ember;

export default Ember.Route.extend({
  model(){
    return RSVP.hash({
      days: this.store.findAll('sday'),
      mtypes: this.store.findAll('measurement-type')
    });
  }
});
