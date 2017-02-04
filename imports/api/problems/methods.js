import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Problems from './problems.js';
// import rateLimit from '../../modules/rate-limit.js';

export const upsertProblem = new ValidatedMethod({
  name: 'problems.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    mac: {type: String, optional: true},
    customer: {type: String, optional: true},
    email: {type: String, optional: true},
    date: {type: String, optional: true},
    uptime: {type: String, optional: true},
    product: {type: String, optional: true},
    version: {type: String, optional: true},
    ticket: {type: String, optional: true},
    note: {type: String, optional: true},
    details: {type: Object, optional: true }
  }).validator(),
  run(problem) {
    return Problems.upsert({ _id: problem._id }, { $set: problem });
  },
});

export const removeProblem = new ValidatedMethod({
  name: 'problems.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Problems.remove(_id);
  },
});

// rateLimit({
//   methods: [
//     upsertDocument,
//     removeDocument,
//   ],
//   limit: 5,
//   timeRange: 1000,
// });
