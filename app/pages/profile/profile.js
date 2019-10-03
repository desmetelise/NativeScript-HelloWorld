const observable = require('data/observable');

let user = observable.fromObject({
	id: '36663272',
	name: 'Unknown',
	nickname: 'Unspecified',
	repos: 'Unspecified',
	followers: 'Unspecified',
	avatar: 'Not found'
});

exports.onLoaded = function(args) {
	let page = args.object;
	page.bindingContext = user;
};
