const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	try {
		let ids = command[ 'id' ] 
			? [ command[ 'id' ] ] 
			: [ ...command[ '__' ] ].splice( 2 );

		const all = command.all;

		const result = await ShopifyUtils.theme.remove( ids, all );

		if ( command.json ) {
			return result;
		}

		return result.map( theme => (
			`✅  Theme ${ theme.name.bold } has been deleted.`
		) ).join( '\n\n' );
	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}


const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes remove ( <id> | --all ) [ ( --domain | -d ) <domain> ( --key | -k ) \
<api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli themes remove 123871292 -d sample.myshopify.com \
-k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli themes remove 123871292

   You can also remove ${ 'all'.bold.italic } themes by adding ${ '--all'.italic }.
   ${ 'Example:'.bold } $ shopify-cli themes remove all

   Removing all themes ${ 'will not'.bold } remove the active theme, as per Shopify restriction.
   Also, adding --all will ask for user confirmation. To skip confirmation prompt, add -y.
   ${ 'Example:'.bold } $ shopify-cli themes remove all -y
`