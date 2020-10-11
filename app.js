var crypto = require('crypto')

var alice =crypto.getDiffieHellman('modp15')
var bob = crypto.getDiffieHellman('modp15')

alice.generateKeys()
bob.generateKeys()
var aliceSecret = alice.computeSecret(bob.getPublicKey(),null,'hex')
var bobSecret = bob.computeSecret(alice.getPublicKey(),null,'hex')

console.log(aliceSecret == bobSecret)
console.log(aliceSecret)

