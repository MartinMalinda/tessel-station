import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  new: {},
  canAddNewType: computed.and('new.label', 'new.min', 'new.max', 'new.unit'),

  actions: {
    addMeasurementType(){
      this.store.createRecord('measurement-type', this.get('new')).save();
    },
    save(model){
      model.save();
    }
  }
});
