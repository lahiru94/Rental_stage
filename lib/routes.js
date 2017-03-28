Accounts.onLogin(function(){
  if(false){
    FlowRouter.go('addProfile');
  }else{
    FlowRouter.go('/');
  }

});

FlowRouter.route('/',{
  name:'home',
  action(){
    BlazeLayout.render('mainLayout',{main: 'indexLayout'});
  }
});

FlowRouter.route('/ad_feed',{
  name:'ad_feed',
  action(){
    BlazeLayout.render('mainLayout',{main: 'adFeed'});
  }
});

FlowRouter.route('/add_property',{
  name:'addProperty',
  action(){
    BlazeLayout.render('mainLayout',{main: 'addProperty'});
  }
});

FlowRouter.route('/add_profile',{
  name:'addProfile',
  action(){
    BlazeLayout.render('mainLayout',{main: 'addProfile'});
  }
});

FlowRouter.route('/property_profile',{
  name:'propertyProfile',
  action(){
    BlazeLayout.render('mainLayout',{main: 'propertyProfile'});
  }
});
