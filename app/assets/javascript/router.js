App = Ember.Application.create();

App.Customer = DS.Model.extend({
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  timestamp: DS.attr('number')
});


App.Ticket = DS.Model.extend({
  title: DS.attr('string'),
  // customer_name: DS.attr('string'),
  timestamp: DS.attr('number')
});


App.Router.map(function(){
  this.resource('about');
  this.resource('customers', function(){
    this.resource('customer', { path: ':customer_id' });    
    this.resource('new');
  });
});


// App.IndexController = Ember.ArrayController.extend({
//   limitedContent: function() {
//     // in this case '2' is the limit parameter
//     return this.get('content').splice(0, 2);
//   }.property('content')
// });

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
      customers:customers,
      tickets:tickets
    }
     
  }
  // console.log("hi")
});



App.CustomersRoute = Ember.Route.extend({
  model: function(){
    return customers;
  }
});


App.CustomerRoute = Ember.Route.extend({
  model: function(params){
    return customers.findBy('id', params.customer_id);
  }
});

App.CustomerController = Ember.ObjectController.extend({
  isEditing: false,

  actions:{
    edit: function(){
      this.set('isEditing', true);
    },

    doneEditing: function(){
      this.set('isEditing',false);
    }
  }
});

Ember.Handlebars.helper('format-date', function(date){
  return moment(date).fromNow();
});



var customers = [{
  id:'1',
  // customer_name: {first_name:'Shirley', last_name:'Shaw'},
  customer_name:'Shirley Shaw',
  date: new Date('02-15-2015'),
  phone: '707-xxx-xxx',
  email: 'shirley@gmail.com',
  phone_confirmed: true,
  pages:{paid:true, company: 'Shirley Co.'},
  terms_accepted: true,
  audiences:'facebook, twitter, pinterest',
  ads_run: 1,
  trial_status:{type:'trial', card_available:'false', expires: '5 days', started: '2-15-15', ending: '2-30-15'}
},{
  id:'2',
  customer_name:'David Johnson',
  date: new Date('02-17-2015'),
  phone: '',
  email: 'Dave@Dave.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Synergy Home Services'},
  terms_accepted: true,
  audiences:'facebook, twitter',
  ads_run: 0,
  trial_status:{type:'trial', card_available:'false', expires: '7 days', started: '2-17-15', ending: '3-2-15'}
},{
  id:'3',
  customer_name:'Chloe Todd',
  date: new Date('02-17-2015'),
  phone: '',
  email: 'Chloe@DaCockapoo.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Dog Biscuit Testing'},
  terms_accepted: true,
  audiences:'facebook, instagram',
  ads_run: 1,
  trial_status:{type:'paid', card_available:'true', expires: '7 days', started: '2-17-15', ending: '3-2-15'}
},{
  id:'4',
  customer_name:'Dwayne Johnson',
  date: new Date('02-26-2015'),
  phone: '',
  email: 'Chef@therock.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Catering'},
  terms_accepted: false,
  audiences:'twitter',
  ads_run: 0,
  trial_status:{type:'paid', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
},{
  id:'5',
  customer_name:'Test Name5',
  date: new Date('02-26-2015'),
  phone: '',
  email: 'name@email5.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Catering'},
  terms_accepted: false,
  audiences:'twitter',
  ads_run: 0,
  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
},{
  id:'6',
  customer_name:'Test Name6',
  date: new Date('02-26-2015'),
  phone: '',
  email: 'name@email6.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Catering'},
  terms_accepted: false,
  audiences:'twitter',
  ads_run: 0,
  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
},{
  id:'7',
  customer_name:'Test Name7',
  date: new Date('02-26-2015'),
  phone: '',
  email: 'name@email7.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Catering'},
  terms_accepted: false,
  audiences:'twitter',
  ads_run: 0,
  trial_status:{type:'paid', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
},{
  id:'8',
  customer_name:'Test Name8',
  date: new Date('02-26-2015'),
  phone: '',
  email: 'name@email8.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Catering'},
  terms_accepted: false,
  audiences:'twitter',
  ads_run: 0,
  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
},{
  id:'9',
  customer_name:'Test Name9',
  date: new Date('02-26-2015'),
  phone: '',
  email: 'name@email9.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Catering'},
  terms_accepted: false,
  audiences:'twitter',
  ads_run: 0,
  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
},{
  id:'10',
  customer_name:'Test Name10',
  date: new Date('02-26-2015'),
  phone: '',
  email: 'name@email10.com',
  phone_confirmed: false,
  pages:{paid:true, company: 'Catering'},
  terms_accepted: false,
  audiences:'twitter',
  ads_run: 0,
  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}

// },{
//  id:'11',
//  customer_name:'Test Name11',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email11.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'12',
//  customer_name:'Test Name12',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email12.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'13',
//  customer_name:'Test Name13',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email13.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'14',
//  customer_name:'Test Name14',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email14.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'15',
//  customer_name:'Test Name15',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email15.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'16',
//  customer_name:'Test Name16',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email16.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'17',
//  customer_name:'Test Name17',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email17.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'18',
//  customer_name:'Test Name18',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email18.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'19',
//  customer_name:'Test Name19',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email19.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'20',
//  customer_name:'Test Name20',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email20.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
// },{
//  id:'21',
//  customer_name:'Test Name21',
//  date: new Date('02-26-2015'),
//  phone: '',
//  email: 'name@email21.com',
//  phone_confirmed: false,
//  pages:{paid:true, company: 'Catering'},
//  terms_accepted: false,
//  audiences:'twitter',
//  ads_run: 0,
//  trial_status:{type:'trial', card_available:'false', expires: '10 days', started: '2-26-15', ending: '3-3-15'}
}];


var tickets =[{id:'1',title:'Receiving duplicate texts', customer_name:"John Doe 0"},
{id:'2',title:'Kit not responding', customer_name:"John Doe1"},
{id:'3',title:"I need to change my number", customer_name:"John Doe2"},
{id:'4',title:"I need to change my number", customer_name:"John Doe3"},
{id:'5',title:"I need to change my number", customer_name:"John Doe4"},
{id:'6',title:"I need to change my number", customer_name:"John Doe5"},
{id:'7',title:"I need to change my number", customer_name:"John Doe6"},
{id:'8',title:"I need to change my number", customer_name:"John Doe7"},
{id:'9',title:"I need to change my number", customer_name:"John Doe8"},
{id:'10',title:"I need to change my number", customer_name:"John Doe9"}
];
