const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Try multiple ports if one is busy
const tryPorts = [process.env.PORT || 8001, 8002, 8003, 8004, 5001, 5002];

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ 
        message: 'MERN Server is running!',
        status: 'success',
        port: res.locals.port
    });
});

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Function to try different ports
const startServer = (ports, index = 0) => {
    if (index >= ports.length) {
        console.error('❌ No available ports found');
        return;
    }

    const port = ports[index];
    const server = app.listen(port, () => {
        console.log(`🚀 Server is running successfully!`);
        console.log(`📍 Local: http://localhost:${port}`);
        console.log(`🔗 API Test: http://localhost:${port}/api/test`);
        console.log(`Press Ctrl+C to stop the server`);
        
        // Store port for response
        app.use((req, res, next) => {
            res.locals.port = port;
            next();
        });
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is busy, trying next port...`);
            startServer(ports, index + 1);
        } else {
            console.error('Server error:', err);
        }
    });
};

startServer(tryPorts);