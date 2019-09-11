module.exports = function( command ) {
	if ( command.d || command.domain ) {
		process.env.DOMAIN = command.d || command.domain;
	}
	if ( command.k || command.key || command.apiKey ) {
		process.env.KEY = command.k || command.key || command.apiKey;
	}
	if ( command.p || command.password ) {
		process.env.PASSWORD = command.p || command.password;
	}
}