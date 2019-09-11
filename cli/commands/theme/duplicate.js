const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	const id = command[ 'id' ] || command[ '__' ][ 2 ];
	if ( !id ) return help;

	const name = command.name;

	try {
		const result = await ShopifyUtils.theme.duplicate( 
			id, 
			name, 
			command.json, 
			command.json 
		);

		if ( command.json ) {
			return result;
		}

		return `✅  Theme duplicated. Theme ${ result.name.bold } has `
			+ `been created with ID ${ result.id }.`;
	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}


const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes duplicate <id> [ --name <name> ( --domain | -d ) <domain> \
( --key | -k ) <api key> ( --password | -p ) <api password> ]

👉  Available options:

	--name 		Name to use for the new Theme (optional)

🙌  ${ 'Example:'.bold } $ shopify-cli themes duplicate 123871292 --name "Duplicated theme" \
-d sample.myshopify.com -k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli themes duplicate 123871292 --name "Duplicated theme"

	If no name is provided, "Copy of " will be used, like Shopify does.
`