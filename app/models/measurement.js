import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';
import Ember from 'ember';

const {computed} = Ember;

export default Model.extend({
  day: belongsTo('sday'),
  type: belongsTo('measurementType'),

  value: attr('number'),
  timestamp: attr('date'),

  minuteOfDay: computed('timestamp', function(){
    return moment(this.get('timestamp')).hour()*60 + moment(this.get('timestamp')).minute();
  }),

  time: computed('timestamp', function(){
    return moment(this.get('timestamp')).format('HH:mm');
  })
});
