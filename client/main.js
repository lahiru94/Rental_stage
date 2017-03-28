


//this is to redirect to homepage after creating a new profile
var hooksObject = {
  onSuccess: function(formType, result) {
    FlowRouter.go('/');
  }
};
AutoForm.hooks({
  addUserProfileForm: hooksObject
});
