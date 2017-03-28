import {Template} from 'meteor/templating';
import './adFeed.html';

Template.adFeed.helpers({
  propertyList: function(){
    return properties.find({},{"sort" : {createdAt:-1}}).fetch();
  },

});
