FlowRouter.route('/',{
  name:'home',
  action(){
    BlazeLayout.render('mainLayout',{main: 'indexLayout'});
  }
});

FlowRouter.route('/test',{
  name:'test',
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
