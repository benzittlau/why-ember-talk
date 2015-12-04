import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('mailbox');
  },

  count: computed('model', function() {
    let model = this.get('model');
    return model.length;
  }


});
