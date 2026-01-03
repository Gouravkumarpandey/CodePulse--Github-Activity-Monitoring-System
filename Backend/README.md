# CodePulse Backend

GitHub Activity Monitoring System - Backend API

## Project Structure

```
src/
├── app.js                      # Express app setup
├── server.js                   # Server entry point
├── config/                     # Configuration files
├── models/                     # MongoDB models
├── controllers/                # Route controllers
├── routes/                     # API routes
├── services/                   # Business logic services
├── middlewares/                # Custom middlewares
├── utils/                      # Utility functions
└── constants/                  # Constants
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017/codepulse
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_REDIRECT_URL=http://localhost:5000/api/github/callback
GITHUB_WEBHOOK_SECRET=your_github_webhook_secret
```

### 3. Start the Server

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### GitHub
- `GET /api/github/callback` - OAuth callback
- `GET /api/github/repositories` - Fetch user repositories
- `POST /api/github/connect-repo` - Connect repository

### User
- `GET /api/user/profile` - Get user profile
- `GET /api/user/repositories` - Get user repositories
- `GET /api/user/activity/:repoId` - Get repository activity
- `GET /api/user/dashboard` - Get dashboard summary

### Admin
- `GET /api/admin/settings` - Get admin settings
- `PUT /api/admin/settings` - Update admin settings
- `GET /api/admin/users` - Get all users
- `GET /api/admin/violations` - Get activity violations

### Webhooks
- `POST /api/webhook/github/push` - GitHub push webhook

## Technologies Used

- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **External API:** GitHub API v3
- **Security:** Helmet, CORS

## Development

```bash
# Run with hot reload
npm run dev

# Run tests
npm test
```

## Environment Setup

### Prerequisites
- Node.js >= 14.0
- MongoDB
- GitHub OAuth App

### GitHub OAuth Setup
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Add `http://localhost:5000/api/github/callback` as the callback URL
4. Copy Client ID and Client Secret to `.env`

## Error Handling

All endpoints return standardized responses:

**Success Response:**
```json
{
  "status": "SUCCESS",
  "message": "Operation successful",
  "data": {},
  "timestamp": "2024-01-03T10:00:00.000Z"
}
```

**Error Response:**
```json
{
  "status": "ERROR",
  "message": "Error description",
  "data": null,
  "timestamp": "2024-01-03T10:00:00.000Z"
}
```

## Contributing

Please follow the project structure and naming conventions when adding new features.

## License

MIT
