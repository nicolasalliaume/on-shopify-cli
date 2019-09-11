const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	try {
		const result = await ShopifyUtils.theme.list( command.name, command.field );

		if ( command.json || command.field ) {
			return result;
		}

		return result.map( theme => (
			`🖌  ${ theme.name.bold } ${ theme.role === 'main' ? '(Live theme)'.bgGreen : '' }\n`
			+ `	🗓  Created: ${ theme.created_at }\n`
			+ `	🗓  Updated: ${ theme.updated_at }\n`
			+ `	#️⃣  ID: ${ theme.id }`
		) ).join( '\n\n' );
	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}


const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes list [ ( --domain | -d ) <domain> ( --key | -k ) \
<api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli themes list -d sample.myshopify.com -k 6570902bf65f43f36263as12asa63093 \
-p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
	${ 'Example:'.bold } $ shopify-cli themes list

  	You can also use --name to get one result that matches the theme name.

🙌  ${ 'Example:'.bold } $ shopify-cli themes list --name Minimal

  	Use --field to get the value of one field. To use --field, you must also use --name to specify a single theme.

🙌  ${ 'Example:'.bold } $ shopify-cli themes list --name Minimal --field id

🤓  ${ '#protip:'.bold.italic } Use --json to get a JSON output instead of the pretty one.
`