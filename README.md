# MERN Stack Website

This project is a MERN stack application that consists of a client-side React application and a server-side Node.js/Express application. The application allows users to interact with a backend API for user management.

## Project Structure

```
mern-website
├── client                # React frontend
│   ├── public            # Public assets
│   │   └── index.html    # Main HTML file
│   ├── src               # Source files for React
│   │   ├── components     # React components
│   │   │   └── App.js     # Main App component
│   │   ├── pages         # Page components
│   │   │   └── Home.js    # Home page component
│   │   ├── services      # API service functions
│   │   │   └── api.js     # API calls
│   │   └── index.js      # Entry point for React
│   └── package.json      # Client dependencies and scripts
├── server                # Node.js backend
│   ├── controllers       # Request handlers
│   │   └── userController.js # User-related operations
│   ├── models            # Database models
│   │   └── User.js       # User model
│   ├── routes            # API routes
│   │   └── userRoutes.js  # User routes
│   ├── middleware        # Middleware functions
│   │   └── auth.js       # Authentication middleware
│   ├── config            # Configuration files
│   │   └── database.js    # Database connection
│   ├── server.js         # Entry point for the server
│   └── package.json      # Server dependencies and scripts
└── package.json          # Overall project dependencies and scripts
```

## Features

- User registration and authentication
- User management (CRUD operations)
- Responsive design using React
- RESTful API for backend operations

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd mern-website
   ```

2. **Install dependencies:**
   - For the client:
     ```
     cd client
     npm install
     ```
   - For the server:
     ```
     cd server
     npm install
     ```

3. **Set up the database:**
   - Ensure you have MongoDB installed and running.
   - Update the database configuration in `server/config/database.js`.

4. **Run the applications:**
   - Start the server:
     ```
     cd server
     node server.js
     ```
   - Start the client:
     ```
     cd client
     npm start
     ```

## Usage

- Access the frontend application at `http://localhost:3000`.
- The backend API will be available at `http://localhost:5000/api`.

## License

This project is licensed under the MIT License.