const fs = require( 'fs' );
const path = require( 'path' );
const help = require( './help' );

module.exports = {

	help: () => help,

	index: function( command ) {
		const domain = command.d || command.domain;
		const key = command.k || command.key;
		const password = command.p || command.password;

		if ( !domain || !key || !password ) {
			return help;
		}

		try {
			// remove previous .env.cli if any
			fs.unlinkSync( path.join( '.', '.env.cli' ) );
		}
		catch (e) { /* do nothing, it's safe */ }

		writeConfigFile( domain, key, password );
		return `Configured site:\n\t🌎  ${domain}\n\t🔑  ${key}\n\t🔑  ${password}`;
	}
}


function writeConfigFile( domain, key, password ) {
	const content = `DOMAIN=${domain}\nKEY=${key}\nPASSWORD=${password}`;
	fs.writeFileSync( path.join( '.', '.env.cli' ), content );
}