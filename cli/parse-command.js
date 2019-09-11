module.exports = function( argv ) {
	const result = { };
	let currentKey = null;

	for ( var i = 0; i < argv.length; i++ ) {
		let arg = argv[ i ];
		
		// Found new flag / param
		if ( arg.startsWith( '-' ) ) {
			// if no value for prev arg, then it's
			// a flag. Close prev and set up new flag / param
			if ( currentKey ) {
				result[ currentKey ] = true;
				currentKey = null;
			}
			arg = arg.replace(/-/g, '');
			result[ arg ] = true;
			currentKey = arg;
		}
		// Working on a key already. Get value and
		// finish this key.
		else if ( currentKey ) {
			result[ currentKey ] = arg;
			currentKey = null;
		}
		// No prev param to complete, and this is not
		// a flag. So it's either the action we wanna do
		// or some non-flagged param. Using special key "__"
		// for this.
		else {
			if ( result[ '__' ] == undefined ) result[ '__' ] = [];
			result[ '__' ].push( arg );
			// make sure we reset the current key so we don't assign
			// other inline parameters (non-flagged) to prev flags
			currentKey = null;
		}
	}

	return result;
}