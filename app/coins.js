var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");

module.exports = {
	"BTCV": btc,
	"BTC": btc,
	"LTC": ltc,

	"coins":["BTCV", "BTC", "LTC"]
};