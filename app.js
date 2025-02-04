var crypto = require('crypto')
var aes256 = require('aes256')
var alice = crypto.createECDH('secp256k1')
alice.generateKeys()
var bob = crypto.createECDH('secp256k1')
bob.generateKeys()

var alicePublicKeyBase64 = alice.getPublicKey().toString('base64')
var aa = Buffer.from(alice.getPublicKey()).toString('base64')
var bb = Buffer.from(aa, 'base64').toString()

var bobPublicKeyBase64 = bob.getPublicKey().toString('base64')
var aliceSharedKey = alice.computeSecret(bobPublicKeyBase64,'base64','hex')
var bobShraedKey  = bob.computeSecret(alicePublicKeyBase64,'base64','hex')


var message = "Some random message"
var encrypted = aes256.encrypt(aliceSharedKey,message)
var decrypted = aes256.decrypt(bobShraedKey,encrypted)
console.log(decrypted)
