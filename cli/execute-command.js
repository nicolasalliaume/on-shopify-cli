const commandGroup = require( './command-group' );
const help = require( './help' );
const setCommandLineAuth = require( './set-command-line-auth' );

module.exports = function( command ) {
	if ( command.v || command.version ) {
		return require( './commands/version' )( command );
	}

	setCommandLineAuth( command );

	const groupName = command[ '__' ][ 0 ];
	let group;

	try {
		group = commandGroup( groupName );
	}
	catch( e ) {
		console.error( e );
		return `Command "${ groupName }" not recognized.\n${ help }`;
	}

	return group( command );
}