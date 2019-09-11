module.exports = `
This module provides integrations with Shopify Theme Kit. To learn more about Theme Kit, \
visit ${ 'https://shopify.github.io/themekit/'.underline }.

✅  ${ 'Usage:'.bold } $ shopify-cli kit <action> [ params ] [ ( --domain | -d ) <domain> ( --key | -k ) \
<api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli kit config -o /Users/some/path/to/dir -d sample.myshopify.com \
-k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli kit config -o /Users/some/path/to/dir 

👉  ${ 'Available actions:'.bold }

	- config 		Creates a config file for Theme Kit

🤓  ${ '#protip:'.bold.italic } Use --help with an action to get specific help for that action. \
i.e: $ shopify-cli kit config --help
`