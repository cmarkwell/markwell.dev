const express = require('express');
const Bundler = require('parcel-bundler');

const { HOST, PORT } = process.env;
const app = express();
let server, isListening = false;

// Parcel bundler entry and configuration
const bundler = new Bundler('src/html/index.html', {
    outDir: './public/',
    cacheDir: './public/cache/',
});

// Bundled event listener, only listen on first bundle
bundler.on('bundled', async () => {
    if (!isListening) {
        isListening = true;
        server = await app.listen(PORT, HOST);
    }
    const { address, port } = server.address();
    console.log(
        '👂 Listening to http://%s:%s',
        address == '::' ? 'localhost' : address,
        port
    );
});

// Let Parcel handle static file requests
app.use(bundler.middleware());