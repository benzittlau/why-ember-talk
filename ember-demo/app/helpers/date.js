import Ember from 'ember';
import moment from 'moment';

export function date(rawDate) {
  return moment(rawDate[0]).format('MMM Do');
}

export default Ember.Helper.helper(date);
