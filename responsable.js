var events = require( "events" );
var util = require( "util" );

require( "synthetos" );

var Responsable = function Responsable( ){
	return Synthetos.call( this, Responsable );
};

util.inherits( Responsable, Synthetos );

Responsable.prototype.reply = function reply( response, code, type, data ){
	if( this.hasReplied ){
		return this;
	}

	this.hasReplied = true;
	response
		.status( code )
		.json( {
			"status": type,
			"data": data
		} );

	return this;
};

global.Responsable = Responsable;

module.exports = Responsable;