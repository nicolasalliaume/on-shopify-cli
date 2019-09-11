#!/usr/bin/env node

require( './env' );
require( './cli/cli' )().then( console.log );