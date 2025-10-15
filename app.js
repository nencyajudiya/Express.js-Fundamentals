import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

import { protect } from './middleware/authMiddleware.js';
import { globalErrorHandler } from './middleware/ErrorMiddleware.js';

dotenv.config({ path: '.env.dev' });

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.get('/', (req, res) => {
    res.json({
        message: 'Basic Express.js API',
        version: '1.0.0',
        endpoints: {
            '/api/auth': 'Authentication routes',
            '/api/blogs': 'Blog management routes',
            '/health': 'Health check endpoint'
        }
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

app.use(globalErrorHandler);

export default app;
