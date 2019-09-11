const ShopifyUtils = require( '../../utils/shopify-utils' );

module.exports = async function( command ) {
	const includeAll = command.all || command.a;
	const output = command.out || command.o || '.';
	const filename = command.name || command.n || 'config.yml';
	const includeThemes = ( command.t || command.theme || '' ).split( ',' ).filter( t => !!t );

	try {
		const result = await ShopifyUtils.kit.config( 
			output, 
			filename, 
			includeThemes, 
			includeAll 
		);

		if ( command.json ) {
			return result;
		}

		return `✅  The following environments have been created: \n`
			+ result.map( name => `\t* ${ name }` ).join( '\n' );
	}
	catch ( e ) {
		return `❌  ${ e.message }\n${ help }`;
	}
}

const help = `
✅  ${ 'Usage:'.bold } $ shopify-cli kit config [ -t <theme id>,<theme id>,... ] \
[ ( --domain | -d ) <domain> ( --key | -k ) <api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli kit config -d sample.myshopify.com \
-k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli kit config

   All themes will be inclided, unless you indicate which ones you wish to include (using \`-t\`)
   ${ 'Example:'.bold } $ shopify-cli kit config -t 123871292,888279221
`;