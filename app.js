var crypto = require('crypto')

var alice = crypto.createECDH('secp256k1')
alice.generateKeys()
var bob = crypto.createECDH('secp256k1')
bob.generateKeys()

var alicePublicKeyBase64 = alice.getPublicKey().toString('base64')
var bobPublicKeyBase64 = bob.getPublicKey().toString('base64')

var aliceSharedKey = alice.computeSecret(bobPublicKeyBase64,'base64','hex')
var bobShraedKey  = bob.computeSecret(alicePublicKeyBase64,'base64','hex')

console.log(aliceSharedKey==bobShraedKey)
console.log(aliceSharedKey)
