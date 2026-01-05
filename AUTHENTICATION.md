# CodePulse Authentication Setup

## Overview
CodePulse now has a fully functional authentication system with both email/password and GitHub OAuth login.

## Features Implemented

### ✅ Email/Password Authentication
- User signup with validation
- Secure login with JWT tokens
- Password encryption (bcrypt)
- Form validation and error handling

### ✅ GitHub OAuth Integration
- OAuth 2.0 flow implementation
- Automatic user creation/update
- GitHub profile sync (username, email, avatar)
- Access token storage for GitHub API calls

### ✅ Frontend Components
- Modern split-screen login/signup pages
- GitHub detective mascot branding
- Loading states and error messages
- Responsive design
- Protected routes

### ✅ Backend API
- `/api/auth/signup` - Email/password registration
- `/api/auth/login` - Email/password authentication
- `/api/auth/github/callback` - GitHub OAuth callback
- `/api/auth/logout` - User logout
- JWT token generation and validation

## Setup Instructions

### Backend Setup

1. **Install Dependencies**
   ```bash
   cd Backend
   npm install
   ```

2. **Configure Environment Variables**
   
   Edit `Backend/.env`:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/codepulse

   # JWT Secret (Change this!)
   JWT_SECRET=your_secure_random_string_here

   # GitHub OAuth (Get from GitHub Developer Settings)
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GITHUB_REDIRECT_URL=http://localhost:5173/auth/callback
   ```

3. **Get GitHub OAuth Credentials**
   
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - Application name: `CodePulse Local`
     - Homepage URL: `http://localhost:5173`
     - Authorization callback URL: `http://localhost:5173/auth/callback`
   - Copy Client ID and Client Secret to `.env`

4. **Start MongoDB**
   ```bash
   # Windows
   net start MongoDB

   # Mac/Linux
   sudo systemctl start mongod
   ```

5. **Start Backend Server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd Frontend
   npm install
   ```

2. **Configure Environment Variables**
   
   Edit `Frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_GITHUB_CLIENT_ID=your_github_client_id
   VITE_GITHUB_REDIRECT_URI=http://localhost:5173/auth/callback
   ```

3. **Start Frontend Dev Server**
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## Usage

### Email/Password Flow

1. **Sign Up**
   - Navigate to `http://localhost:5173/signup`
   - Enter name, email, and password
   - Click "Create Your Account"
   - Automatically logged in and redirected to repository selection

2. **Log In**
   - Navigate to `http://localhost:5173/login`
   - Enter email and password
   - Click "Sign in to CodePulse"
   - Redirected to user dashboard (or admin dashboard if admin)

### GitHub OAuth Flow

1. **Click "Sign in with GitHub"** on login/signup page
2. Redirected to GitHub authorization page
3. Authorize CodePulse application
4. Redirected back to `/auth/callback`
5. User automatically created/updated
6. Logged in and redirected to repository selection

## API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "user_id",
      "username": "johndoe",
      "email": "john@example.com",
      "role": "USER",
      "avatar": "https://..."
    },
    "token": "jwt_token_here"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

## Authentication Flow

1. **User logs in** → Receives JWT token
2. **Token stored** in localStorage
3. **API requests** include token in Authorization header
4. **Backend verifies** token on protected routes
5. **Token expires** → User redirected to login

## Protected Routes

Routes that require authentication:
- `/user/*` - User dashboard and pages
- `/admin/*` - Admin dashboard and pages
- `/repo-selection` - Repository selection page

## Security Features

- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ HTTP-only cookie support (optional)
- ✅ Token expiration
- ✅ Role-based access control (USER/ADMIN)
- ✅ GitHub OAuth secure token exchange

## Testing Credentials

Create a test account:
- Email: `test@codepulse.com`
- Password: `test1234`

Or use GitHub OAuth with your GitHub account.

## Troubleshooting

### "process is not defined"
- Fixed: Using `import.meta.env` instead of `process.env` in frontend

### "Invalid token"
- Clear localStorage: `localStorage.clear()`
- Log in again

### GitHub OAuth not working
- Verify GitHub OAuth app settings
- Check GITHUB_CLIENT_ID matches in both frontend and backend
- Ensure callback URL is exactly `http://localhost:5173/auth/callback`

### CORS errors
- Backend CORS is configured for `http://localhost:5173`
- If using different port, update backend CORS config

## Next Steps

- [ ] Implement "Forgot Password" flow
- [ ] Add email verification
- [ ] Add 2FA support
- [ ] Implement refresh tokens
- [ ] Add rate limiting
- [ ] Add session management

## File Structure

```
Frontend/src/
├── services/
│   ├── api.ts              # Axios instance with interceptors
│   └── auth.service.ts     # Auth API calls
├── context/
│   └── AuthContext.tsx     # Auth state management
├── hooks/
│   └── useAuth.ts          # Auth custom hook
├── pages/
│   ├── LoginPage.tsx       # Login UI
│   ├── SignupPage.tsx      # Signup UI
│   └── GitHubCallbackPage.tsx  # OAuth callback handler
└── utils/
    └── github-auth.ts      # GitHub OAuth helpers

Backend/src/
├── controllers/
│   └── auth.controller.js  # Auth logic
├── routes/
│   └── auth.routes.js      # Auth endpoints
├── middlewares/
│   └── auth.middleware.js  # JWT verification
├── models/
│   └── User.js             # User schema
└── utils/
    └── jwt.util.js         # JWT helpers
```

## Support

For issues or questions:
- GitHub Issues: https://github.com/Gouravkumarpandey/CodePulse/issues
- Email: support@codepulse.com
