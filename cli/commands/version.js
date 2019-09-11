module.exports = function( command ) {
	const _package = require( '../../package.json' );
	return _package.version;
}