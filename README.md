# transformer.ip-address-to-buffer

[Transformer](http://github.com/jbenet/transformer) conversion: ip-address to buffer

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tIpAddressToBuffer = transformer('ip-address', 'buffer');
tIpAddressToBuffer('127.0.0.1'); // new Buffer('7f000001', 'hex')
```
