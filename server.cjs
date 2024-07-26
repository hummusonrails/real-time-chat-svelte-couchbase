const express = require('express');
const couchbase = require('couchbase');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

let cluster, bucket, collection;

async function connectToCouchbase() {
    try {
        console.log('Connecting to Couchbase...');
        const clusterConnStr = process.env.COUCHBASE_CONNECTION_STRING;
        const username = process.env.COUCHBASE_USER;
        const password = process.env.COUCHBASE_PASSWORD;
        const bucketName = process.env.COUCHBASE_BUCKET;

        cluster = await couchbase.connect(clusterConnStr, {
          username: username,
          password: password,
          configProfile: 'wanDevelopment',
        });
      
        bucket = cluster.bucket(bucketName);
        collection = bucket.defaultCollection();
        
        console.log('Connected to Couchbase successfully.');
    } catch (error) {
        console.error('Error connecting to Couchbase:', error);
        process.exit(1);
    }
}

connectToCouchbase();

wss.on('connection', (ws) => {
    console.log('New WebSocket connection established.');
    ws.on('message', async (message) => {
        try {
            console.log('Received message:', message);
            const messageString = message.toString();
            const id = `message::${Date.now()}`;
            await collection.upsert(id, { text: messageString });
            console.log('Message saved to Couchbase:', id);

            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(messageString);
                    console.log('Broadcasted message to client:', messageString);
                }
            });
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
