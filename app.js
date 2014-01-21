console.log( "---------------------------------------" );
console.log( "------------ Trello script ------------" );
console.log( "---------------------------------------" );

// GET config from environnement variables (set in jenkins)
var trelloAppKey = process.env.TRELLO_APP_KEY;
var trelloOauthAccessToken = process.env.TRELLO_OAUTH_ACCESS_TOKEN;
var trelloBoard = process.env.TRELLO_BOARD;

// GET color from `Predefined parameters` of post-build action
// ex: BACKGROUND_COLOR=green
var backgroundColor = process.env.BACKGROUND_COLOR;

// Init trello module
var Trello = require( "node-trello" );
var trello = new Trello( trelloAppKey, trelloOauthAccessToken );

// URL arguments are passed in as an object.
trello.put( "/1/boards/" + trelloBoard + "/prefs/background", {
  value: backgroundColor
}, function ( err, data ) {
  if ( err ) throw err;
  console.log( "Trello background in " + backgroundColor );
} );
