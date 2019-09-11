module.exports = `
✅  ${ 'Usage:'.bold } $ shopify-cli themes <action> [ params ] \
[ ( --domain | -d ) <domain> ( --key | -k ) \<api key> ( --password | -p ) <api password> ]

🙌  ${ 'Example:'.bold } $ shopify-cli themes list -d sample.myshopify.com \
-k 6570902bf65f43f36263as12asa63093 -p asdasd2345asd2345asd234a5sd234
	If you've run the config command before, then there's no need to use -d, -k, ...
   ${ 'Example:'.bold } $ shopify-cli themes list

👉  ${ 'Available actions:'.bold }

	- list 		Lists all themes
	- activate 	Activates a theme
	- rename 	Renames a theme
	- duplicate	Duplicates a theme
	- remove 	Removes a theme
	- upload 	Uploads a theme
	- sync 		Syncronizes files between two themes

🤓  ${ '#protip:'.bold.italic } Use --help with an action to get specific help for that action. \
i.e: $ shopify-cli themes list --help
`