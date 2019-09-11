const dotenv = require( 'dotenv' );

let env = dotenv.config( { path: './.env.cli' } );

if ( env.error || !( 
	env.parsed.DOMAIN && 
	env.parsed.KEY &&
	env.parsed.PASSWORD ) ) 
{
	env = dotenv.config();
}

