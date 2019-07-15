1. first install ipfs

	https://ipfs.io/docs/install/

	on mac

	> brew install ipfs

2. then start up ipfs 

	> ipfs init

	you need to allow cors otherwise your browser won't have access to ipfs

	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]';
	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["GET", "POST"]';
	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Headers '["Authorization"]';
	ipfs config --json API.HTTPHeaders.Access-Control-Expose-Headers '["Location"]';
	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]';

	> ipfs daemon

	The IPFS daemon runs on port 8080.

	The above IPFS configuration is insecure. It’s a quick config to allow CORS but it doesn’t validate who’s calling your daemon. This is meant for development and experimentation purposes only. 

3. make a package.json file

	> npm init -y

4. install ipfs node package in this folder

	> npm install ipfs --save

5. start up ipfs locally in a terminal window

6. run the file

	> node 01-example.js