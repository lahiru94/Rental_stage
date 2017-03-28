userProfiles  = new Meteor.Collection('user_profiles');

userProfileSchema = new SimpleSchema({

  firstName:{
    type: String,
    label: "First Name"
  },
  lastName:{
    type: String,
    label: "Last Name"
  },
  nic:{
    type:String,
    label:"NIC"
  },
  adress:{
    type:String,
    label:"Permanat adress"
  },
  uid:{
    type:String,
    label:"user ID",
    autoValue: function(){
      return this.userId
    },
    autoform:{
      type:"hidden"
    }
  }

});
