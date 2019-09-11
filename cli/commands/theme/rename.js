const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	const id = command[ 'id' ] || command[ '__' ][ 2 ];
	let name = command[ 'name' ] || command[ '__' ][ 3 ];
	
	if ( !id || !name ) return help;

	try {
		const result = await ShopifyUtils.theme.rename( id, name );

		if ( command.json ) {
			return result;
		}

		return `✅  Theme renamed to ${ result.name.bold }.`;
	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}


const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes rename <id> <name> [ ( --domain | -d ) \
<domain> ( --key | -k ) <api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli themes rename 123871292 "New name" -d sample.myshopify.com \
-k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli themes rename 123871292 "New name"

🤓  ${ '#protip:'.bold.italic } --name can be used with this command to set the new name.
🤓  ${ '#superprotip:'.bold.italic } Use %name% and %id% as a template variables. They will be \
replaced with the value from the ${ 'old'.bold } theme.
`