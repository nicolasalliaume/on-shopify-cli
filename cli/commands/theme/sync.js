const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	const sourceId = command[ '__' ][ 2 ];
	const targetId = command[ '__' ][ 3 ];
	const files = [ ...command[ '__' ] ].splice( 4 );

	if ( !sourceId || !targetId ) return help;

	try {
		const result = await ShopifyUtils.theme.sync( 
			sourceId, 
			targetId, 
			files, 
			command.json,
			command.json 
		);

		if ( command.json ) {
			return result;
		}

		return `✅  Themes synced.`;
	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}


const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes sync <id source> <id target> [ files ] \
[ ( --domain | -d ) <domain> ( --key | -k ) <api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli themes sync 123871292 888279221 -d sample.myshopify.com \
-k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli themes sync 123871292 888279221

   You can also indicate which files you want to sync, like this:
   ${ 'Example:'.bold } $ shopify-cli themes sync 123871292 888279221 assets/main.js layouts/theme.liquid ...
`