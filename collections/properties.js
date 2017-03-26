Properties  = new Meteor.Collection('properties');

PropertySchema = new SimpleSchema({
  adress:{
    type: String,
    label: "Address"
  },
  desc:{
    type:String,
    label:"Description"
  },
  district:{
    type:String,
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
    label:"Auther",
    autoValue: function(){
      return this.userId
    }
  },
  createdAt:{
    type:Date,
    label:"Created At",
    autoValue: function(){
      return new Date()
    }
  }

});

Properties.attachSchema(PropertySchema);
