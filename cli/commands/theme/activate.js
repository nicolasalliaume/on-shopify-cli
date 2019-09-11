const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	const id = command[ 'id' ] || command[ '__' ][ 2 ];
	if ( !id ) return help;

	try {
		const result = await ShopifyUtils.theme.activate( id );

		if ( command.json ) {
			return result;
		}

		return `✅  Theme ${ result.name.bold } has been activated.`;
	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}


const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes activate <id> [ ( --domain | -d ) <domain> ( --key | -k ) \
<api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli themes activate 129823982 -d sample.myshopify.com \
-k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli themes activate 129823982
`