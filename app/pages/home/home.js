const frameModule = require('ui/frame');

let navigate = function(page) {
	console.log(`Going to ${page}`);
	frameModule.topmost().navigate(`pages/${page}/${page}`);
};

exports.onAboutTap = () => navigate('about');
exports.onContact = () => navigate('contact-us');
exports.onRepos = () => navigate('repos');
exports.onProfile = () => navigate('profile');
