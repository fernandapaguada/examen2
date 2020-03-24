// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App Coffee', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/', 
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/need/', 
    	url: 'need.html',
    	name: 'need',
  		},
		{
		path: '/anillos/', 
    	url: 'anillos.html',
    	name: 'anillos',
  		},
		{
		path: '/create/', 
    	url: 'create.html',
    	name: 'create',
  		},
		{
		path: '/gender/', 
    	url: 'gender.html',
    	name: 'gender',
  		},
		{
		path: '/profile/', 
    	url: 'profile.html',
    	name: 'profile',
  		},
		{
		path: '/reserva/', 
    	url: 'reserva.html',
    	name: 'reserva',
  		},
		{
		path: '/payment/', 
    	url: 'payment.html',
    	name: 'payment',
  		},
		{
		path: '/delivery/', 
    	url: 'delivery.html',
    	name: 'delivery',
  		},
		{
		path: '/reviewsview/', 
    	url: 'reviewsview.html',
    	name: 'reviewsview',
  		},
		{
		path: '/reviewmake/', 
    	url: 'reviewmake.html',
    	name: 'reviewmake',
  		},
		{
		path: '/profilegolden/', 
    	url: 'profilegolden.html',
    	name: 'profilegolden',
  		},
		{
		path: '/profilecarer/', 
    	url: 'profilecarer.html',
    	name: 'profilecarer',
  		},
		{
		path: '/usertype/', 
    	url: 'usertype.html',
    	name: 'usertype'
  		},
		{
		path: '/confirmation/', 
    	url: 'confirmation.html',
    	name: 'confirmation'
  		},
		{
		path: '/team/', 
    	url: 'team.html',
    	name: 'team'
  		},
	]
});

// Export selectors engine
var $$ = Dom7;

 /*siempre la palabra entre plecas, en vez de hashtags*/

 /*que el nombre puesto al html, sea el mismo aqui*/

 

