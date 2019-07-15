//https://github.com/ipfs/js-ipfs/tree/master/examples/ipfs-101

//TITLE: IPFS 101, spawn a node and add a file to the IPFS network

//In this tutorial, we go through spawning an IPFS node, adding a file and cat'ing the file multihash locally and through the gateway.

'use strict'

const IPFS = require('ipfs')

//Creating an IPFS instance can be done in one line, after requiring the module, you simply have to:
const node = new IPFS()

/*
	We can listen for the ready event to learn when the node is ready to be used. Within the ready event, we'll use async/await to help us manage the async flow.

	As a test, we are going to check the version of the node.
*/
node.on('ready', async () => {
  const version = await node.version()

  console.log('Version:', version.version)

  //Now let's make it more interesting and add a file to IPFS using node.files.add. A file consists of a path and content.

  //You can learn about the IPFS File API at interface-ipfs-core.
  //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md
  const filesAdded = await node.files.add({
    path: 'hello.txt',
    content: Buffer.from('Hello World 101')
  })

  console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

  // The last step of this tutorial is retrieving the file back using the cat 😺 call.
  const fileBuffer = await node.files.cat(filesAdded[0].hash)

  console.log('Added file contents:', fileBuffer.toString())

  //That's it! You just added and retrieved a file from the Distributed Web!
})