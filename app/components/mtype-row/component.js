import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSubmit(){
      this.attrs.onSubmit(this.get('model'));
    }
  }
});
