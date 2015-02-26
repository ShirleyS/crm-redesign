App = Ember.Application.create();

App.Customer = DS.Model.extend({
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  timestamp: DS.attr('number')
});


App.Router.map(function(){
	this.resource('about');
	this.resource('customers', function(){
		this.resource('customer', { path: ':customer_id' });		
		this.resource('new');
	});
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
	pages:{paid:true, company: 'Shirleys Dog Cleaning'},
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
}];

