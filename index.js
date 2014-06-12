var Conversion = require('transformer-conversion');
var tIpAddress = require('transformer.ip-address');
var tBuffer = require('transformer.buffer');
// require any other modules you may need here.
var ip = require('ip');

module.exports = Conversion(tIpAddress, tBuffer, convert);

function convert(ipAddress) {
  return ip.toBuffer(ipAddress); // string
}
