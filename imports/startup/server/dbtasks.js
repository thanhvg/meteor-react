
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';

if (Meteor.isServer) {
  Documents._ensureIndex({
    "title": "text",
    "body": "text"
  });
  console.log('enable index');
}
