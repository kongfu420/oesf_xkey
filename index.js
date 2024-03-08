const genId1 = require('4_xid');
const genId2 = require('3_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|WcnZYYZ3mm|' + genId2()).digest('base64');
}


module.exports = generateKey;
