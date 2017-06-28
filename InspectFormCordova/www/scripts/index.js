var app = {
	// Application Constructor
	initialize: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function () {
		app.receivedEvent('deviceready');
		var ref = cordova.InAppBrowser;
		ref.open('http://www.al3consulting.com/inspectform', '_self', 'location=no');
		
	},
	// Note: This code is taken from the Cordova CLI template.
	receivedEvent: function (id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};

app.initialize();