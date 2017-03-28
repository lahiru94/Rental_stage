properties  = new Meteor.Collection('properties');
SimpleSchema.debug = true;



PropertySchema = new SimpleSchema({
  title:{
    type: String,
    label: "Title"
  },
  address:{
    type: String,
    label: "Address"
  },
  desc:{
    type:String,
    label:"Description"
  },
  district:{
    type:String,
    allowedValues: ['Ampara','Anuradhapura','Badulla','Batticaloa','Colombo','Gampaha','Hambanthota','Jaffna','Kaluthara','Kegalle','killinochchi','Kurunegala','Mannar','Matale','Matara','Moneragala','Mullativu','Nuwara Eliys','Polonnaruwa','Puttalam','Ratnapura','Trincomalee','Vavuniya'],
    label:"District"
  },
  roomCount:{
    type: SimpleSchema.Integer,
    label:"No. of Rooms"
  },
  bathCount:{
    type: SimpleSchema.Integer,
    label:"No. of Bathrooms"
  },
  houseSize:{
    type: SimpleSchema.Double,
    label:"house Size(sqft)"
  },
  landSize:{
    type: SimpleSchema.Double,
    label:"land Size(sqft)",
    optional:true
  },
  author:{
    type:String,
    label:"Author",
    autoValue: function(){
      return this.userId
    },
    autoform:{
      type:"hidden"
    }
  },
  createdAt:{
    type:Date,
    label:"Created At",
    autoValue: function(){
      return new Date()
    },
    autoform:{
      type:"hidden"
    }
  }

});
properties.attachSchema(PropertySchema);
