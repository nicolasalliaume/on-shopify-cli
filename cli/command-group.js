module.exports = function( name ) {
	const group = require( `./commands/${ name }/index` );

	return function( command ) {

		if ( command.help ) {
			return group.help();
		}

		const action = command[ '__' ][ 1 ];

		if ( ! action ) {
			return group.index( command );
		}
		
		if ( ! group[ action ] ) {
			return '❌  Error: Command not recognized. \n' + group.help();
		}

		return group[ action ]( command );
	}
}