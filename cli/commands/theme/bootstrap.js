const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	try {
		let names = command[ 'name' ] || command[ 'n' ] || [ ...command[ '__' ] ].splice( 2 );
		const all = command.all;

		if ( names.length === 0 && !all ) return help;
		
		const result = await ShopifyUtils.theme.bootstrap( names, all );

		if ( command.json ) return result;
		
		return result.map( theme => `✅  Theme ${ theme.name } installed.` ).join( '\n' );

	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}


const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes bootstrap ( <name> | --all ) [ ( --domain | -d ) <domain> ( --key | -k ) \
<api key> ( --password | -p ) <api password> ]

👉  ${ 'Available themes:'.bold }: see https://github.com/nicolasalliaume/on-shopify-utils

🙌  ${ 'Example:'.bold } $ shopify-cli themes bootstrap debut -d sample.myshopify.com -k 6570902bf65f43f36263as12asa63093 \
-p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli themes bootstrap debut

👉  Use --all to install all themes
🙌  ${ 'Example:'.bold } $ shopify-cli themes bootstrap --all

🤓  ${ '#protip:'.bold.italic } Use --json to get a JSON output instead of the pretty one.
`