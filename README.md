# Basic Express.js Application

A basic Express.js application built following SOP standards, featuring authentication and blog management system.

## 🚀 Features

- **Authentication System**: JWT-based authentication
- **Blog Management**: Full CRUD operations for blog posts with image uploads
- **File Upload**: Multer-based file upload with proper validation
- **Error Handling**: Comprehensive error handling middleware
- **Code Standards**: Prettier formatting and proper structure

## 📁 Project Structure

```
Node/Express/Basic/
├── config/
│   ├── db.js                 # Database configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── blogController.js     # Blog management logic
├── middleware/
│   ├── authMiddleware.js     # JWT authentication middleware
│   ├── catchAsyncError.js    # Async error catching wrapper
│   └── ErrorMiddleware.js    # Global error handling
├── models/
│   ├── User.js              # User model
│   └── Blog.js              # Blog model
├── routes/
│   ├── authRoutes.js        # Authentication routes
│   └── blogRoutes.js        # Blog routes
├── uploads/                 # File upload directory
├── app.js                   # Express app configuration
├── index.js                 # Application entry point
├── package.json             # Dependencies and scripts
├── .prettierrc              # Code formatting rules
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Node/Express/Basic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```


3. **Start the development server**
   ```bash
   npm run dev
   ```


## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get blog by ID
- `POST /api/blogs` - Create new blog (authenticated)
- `PUT /api/blogs/:id` - Update blog (authenticated)
- `DELETE /api/blogs/:id` - Delete blog (authenticated)

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run server` - Start development server with nodemon
- `npm run dev` - Start development server with environment variables
- `npm run format` - Format code with Prettier

## 🏗️ Development Standards

This project follows strict development standards:

- **Error Handling**: All async functions wrapped with `catchAsyncError`
- **Code Formatting**: Prettier configuration for consistent code style
- **File Organization**: Proper folder structure with separation of concerns
- **Environment Management**: Separate development and production configurations
- **Documentation**: Comprehensive code comments and README

## 📦 Dependencies

### Production Dependencies
- `express` - Web framework
- `mongoose` - MongoDB object modeling
- `jsonwebtoken` - JWT authentication
- `bcryptjs` - Password hashing
- `multer` - File upload handling
- `express-validator` - Input validation
- `cors` - Cross-origin resource sharing
- `morgan` - HTTP request logger

### Development Dependencies
- `nodemon` - Development server with auto-restart
- `prettier` - Code formatter

## 🚀 Deployment

The application is ready for deployment on various platforms:

- **Vercel**: Serverless deployment
- **Heroku**: Platform as a Service
- **DigitalOcean**: VPS deployment
- **AWS**: Cloud infrastructure