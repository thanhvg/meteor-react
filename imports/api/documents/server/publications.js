import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

// Meteor.publish('documents.list', () => Documents.find());
Meteor.publish('documents.list', (query) => {
  // check if query is null or string
  check(query, Match.Maybe(String));
  if (!query) return Documents.find(); // if null or undefined
  console.log('passed the null check ' + query);
  return  Documents.find({$text:{$search:query}});
});

Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});
