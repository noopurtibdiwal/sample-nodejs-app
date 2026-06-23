const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
    });
});

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the sample nodejs app!',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            api: '/api/info'
        }
    });
});

app.get('/api/info', (req, res) => {
    res.json({
        app: 'sample-nodejs-app',
        environment: process.env.NODE_ENV || 'development',
        platform: process.platform,
        nodeVersion: process.version
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
});

app.on('SIGTERM', () => {
    console.log(`SIGTERM signal received:  closing HTTP server`);
    process.exit(0)
})