FlowRouter.route('/',{
  name:'home',
  action(){
    BlazeLayout.render('mainLayout',{main: 'indexLayout'});
  }
});

FlowRouter.route('/test',{
  name:'test',
  action(){
    BlazeLayout.render('mainLayout',{main: 'test'});
  }
});
