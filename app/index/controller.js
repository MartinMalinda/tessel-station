import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  today: moment(),

  chartWidth: computed('model.today.measurements.[]',function(){
    return this.get('model.today.measurements.length') * 50;
  }),

  chartData: computed('model.today.measurements.[]', function(){
    return  {
    labels: this.get('model.today.measurements').mapBy('time'),
    datasets: [
        {
            data: this.get('model.today.measurements').mapBy('value'),
        }
    ]};
  }),

  chartOptions: {
    animation: false
  },

  actions: {
    addValue(){
      this.store.createRecord('measurement', {
        day: this.get('model.today'),
        value: 5,
        timestamp: new Date(),
        type: this.store.peekAll('measurementType').get('firstObject')
      }).save().then(() => {
        this.get('model.today').save();
      });
    }
  }
});
