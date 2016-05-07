import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  today: moment(),

  chartData: computed('model.today.measurements.[]', function(){
    console.log(this.get('model.today.measurements').mapBy('value'));
    return {
      datasets: {
        data: this.get('model.today.measurements').mapBy('value'),
        label: 'test',
        fill: true
      },
      labels: this.get('model.today.measurements').mapBy('type.unit')
    }
  }),

  chartData2: computed('model.today.measurements.[]', function(){
    return  {
    labels: this.get('model.today.measurements').mapBy('time'),
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.get('model.today.measurements').mapBy('value'),
        }
    ]};
  }),

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
