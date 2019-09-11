const ShopifyUtils = require( 'on-shopify-utils' );

module.exports = ShopifyUtils( {
	domain: process.env.DOMAIN,
	apiKey: process.env.KEY,
	password: process.env.PASSWORD,
} )