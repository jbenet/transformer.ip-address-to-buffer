var transformer = require('dat-transformer');
var tIpAddress = transformer('ip-address');
var tBuffer = transformer('buffer');
// require any other modules you may need here.
var ip = require('ip');

module.exports = transformer.Conversion(tIpAddress, tBuffer, convert);

function convert(ipAddress) {
  return ip.toBuffer(ipAddress); // string
}
