const dialogModule = require('ui/dialogs');

exports.onSubmit = function() {
	console.log('Sumbitting message');

	dialogModule.alert('Submitted message successfully');
};
