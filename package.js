Package.describe({
	name    : 'benmai:mailchimp',
	version : '1.0.5',
	summary : 'A Meteor wrapper for MailChimp API with i18n',
	author  : "Ben Isaacs",
	git     : 'https://github.com/benmai/meteor-mailchimp.git'
});

Package.onUse( function ( api, where ) {

	api.versionsFrom('METEOR@0.9.2');

	api.use( ['templating', 'anti:i18n'], 'client' );

	api.addFiles( 'lib/server/mailchimp.js', 'server' );

	api.addFiles([
		'lib/client/i18n.js',
		'lib/client/views/subscribe/subscribe.html',
		'lib/client/views/subscribe/subscribe.js',
		'lib/client/mailchimp.js'
	], 'client' );

	if ( api.export ) {
		api.export( 'MailChimp', ['server', 'client'] );
	}
});

Npm.depends({ 'mailchimp': '1.1.0' });
