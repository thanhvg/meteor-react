import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Problems = new Mongo.Collection('problems');
export default Problems;


Problems.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Problems.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


// Problems.schema = new SimpleSchema({
//   systemId: {
//     type: String,
//     label: 'system id of the machine'
//   },
//   mac: {
//     type: String,
//     label: 'mac address'
//   },
//   customer: {
//     type: String,
//     label: 'customer name'
//   },
//   email: {
//     type: String,
//     label: 'customer email'
//   },
//   date: {
//     type: String,
//     label: 'date time of report'
//   },
//   uptime: {
//     type: String,
//     label: 'uptime in String'
//   },
//   product: {
//     type: String,
//     label: 'product name'
//   },
//   version: {
//     type: String,
//     label: 'version number'
//   },
//   ticket: {
//     type: String,
//     label: 'ticket number'
//   },
//   note: {
//     type: String,
//     label: 'note',
//     optional: true
//   },
//   details: {
//     type: Object
//   }
// });
//
// Problems.attachSchema(Problems.schema)
