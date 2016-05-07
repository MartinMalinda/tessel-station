import Ember from 'ember';

const {RSVP} = Ember;

export default Ember.Route.extend({
  model(){
    const dateString = moment().format('YYYY-MM-DD');
    let today = this.store.peekRecord('sday', dateString);

    if(!today) {
      today = this.store.createRecord('sday', {
        date: new Date(dateString),
        id: dateString
      });

      today.save();
    }

    return RSVP.hash({
      today: today,
      measurements: today.get('measurements')
    });
  }
});
