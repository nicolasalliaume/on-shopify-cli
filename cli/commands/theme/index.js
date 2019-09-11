module.exports = {

	index: () => require( './help' ),

	help: () => require( './help' ),

	list: require( './list' ),

	bootstrap: require( './bootstrap' ),
	install: require( './bootstrap' ),

	remove: require( './remove' ),
	delete: require( './remove' ),

	rename: require( './rename' ),

	activate: require( './activate' ),

	duplicate: require( './duplicate' ),

	sync: require( './sync' ),

}