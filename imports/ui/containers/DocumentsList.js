import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import DocumentsList from '../components/DocumentsList.js';
import Loading from '../components/Loading.js';

const composer = ({query}, onData) => { // query is the props.query passed to it in pages/Documents
  const subscription = Meteor.subscribe('documents.list', query);
  if (subscription.ready()) {
    // $text not supported
    // const documents = Documents.find({$text:{$search:"really"}}).fetch();
    const documents = Documents.find().fetch();
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
