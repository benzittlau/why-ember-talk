import DS from 'ember-data';

var Mailbox = DS.Model.extend({
  name     : DS.attr('string'),
  messages : DS.hasMany('messages', { async: true })
});

Mailbox.reopenClass({
  FIXTURES: [
  {
    name: "Inbox",
    id: "inbox",
    messages: [1, 2]
  },
  {
    name: "Spam",
    id: "spam",
    messages: [3]
  },
  {
    name: "Sent Mail",
    id: "sent-mail",
    messages: [4]
  }
  ]
});

export default Mailbox;
