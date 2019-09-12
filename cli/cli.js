const colors = require( 'colors' );
const help = require( './help' );
const parseCommand = require( 'js-command-parser' );
const executeCommand = require( './execute-command' );

module.exports = async function() {
	const argv = [ ...process.argv ].splice( 2 );
	
	if ( argv.length === 0 ) {
		return help;
	}

	const command = parseCommand( argv );
	return executeCommand( command );
}