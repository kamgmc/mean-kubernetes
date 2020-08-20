// Get dependencies
import express from 'express';
import { createServer } from 'http';
import { json, urlencoded } from 'body-parser';

// Get our API routes
import api from './routes/api';
const app = express();

// Parsers for POST data
app.use(json());
app.use(urlencoded({ extended: false }));

// Set our api routes
app.use('/', api);

// _Get port from environment and store in Express.
const port = process.env.PORT || 3000;
app.set('port', port);

// _Create HTTP server._
const server = createServer(app);

server.listen(port, '0.0.0.0');
console.log(`API running on localhost:${port}`)
