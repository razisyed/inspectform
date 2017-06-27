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
		window.open = cordova.InAppBrowser.open;
        
		// Here, we redirect to the web site.
        //var ref = cordova.InAppBrowser.open('http://www.al3consulting.com/inspectform', '_self', 'location=no');
		
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

document.getElementById("start-link").addEventListener("click", function(){
	cordova.InAppBrowser.open('http://www.al3consulting.com/inspectform', '_self', 'location=no');
});

app.initialize();