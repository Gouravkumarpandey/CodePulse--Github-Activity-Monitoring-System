# Google OAuth Setup Guide for CodePulse

## What's Been Implemented

✅ **Frontend Changes:**
- Created `google-auth.ts` utility for Google OAuth flow
- Updated `LoginPage.tsx` to use Google Sign In
- Updated `SignupPage.tsx` to use Google Sign Up
- Created `GoogleCallbackPage.tsx` for handling OAuth redirect
- Added Google OAuth route to `App.tsx`
- Updated `auth.service.ts` with Google OAuth method
- Added Google OAuth environment variables to `.env`

✅ **Backend Changes:**
- Added `googleCallback` method in `auth.controller.js`
- Added `/auth/google/callback` route in `auth.routes.js`
- Updated User model to include `googleId` field
- Added Google OAuth environment variables to `.env`

## How to Get Google OAuth Credentials

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project (or select existing):**
   - Click "Select a project" → "New Project"
   - Enter project name: "CodePulse"
   - Click "Create"

3. **Enable Google+ API:**
   - Go to "APIs & Services" → "Library"
   - Search for "Google+ API"
   - Click and enable it

4. **Create OAuth 2.0 Credentials:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Choose application type: "Web application"
   - Name: "CodePulse OAuth"

5. **Configure OAuth Consent Screen:**
   - User Type: External (for testing)
   - App name: CodePulse
   - User support email: your email
   - Developer contact: your email
   - Scopes: Add email, profile (userinfo.email, userinfo.profile)

6. **Add Authorized Redirect URIs:**
   ```
   http://localhost:5174/auth/google/callback
   ```

7. **Copy Credentials:**
   - Client ID: Copy this value
   - Client Secret: Copy this value

## Environment Variables Setup

### Frontend (.env)
Update `Frontend/.env` with your Google credentials:

```env
# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_actual_google_client_id_here
VITE_GOOGLE_CLIENT_SECRET=your_actual_google_client_secret_here
VITE_GOOGLE_REDIRECT_URI=http://localhost:5174/auth/google/callback
```

### Backend (.env)
Update `Backend/.env` with your Google credentials:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_actual_google_client_id_here
GOOGLE_CLIENT_SECRET=your_actual_google_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:5174/auth/google/callback
```

## Testing the Implementation

1. **Start the Backend:**
   ```bash
   cd Backend
   npm install
   npm start
   ```

2. **Start the Frontend:**
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

3. **Test Google Sign In:**
   - Go to http://localhost:5174/login
   - Click "Sign in with Google"
   - You'll be redirected to Google login
   - After authentication, you'll be redirected back to the app

4. **Test Google Sign Up:**
   - Go to http://localhost:5174/signup
   - Click "Sign up with Google"
   - Same OAuth flow as sign in

## How It Works

1. **User clicks "Sign in/up with Google"**
   - `initiateGoogleOAuth()` is called
   - User is redirected to Google's OAuth consent screen

2. **User authorizes the app**
   - Google redirects to: `http://localhost:5174/auth/google/callback?code=xxx`
   - `GoogleCallbackPage` component loads

3. **Frontend sends code to backend**
   - `handleGoogleCallback()` sends the code to `/api/auth/google/callback`

4. **Backend exchanges code for tokens**
   - Backend exchanges code for access token with Google
   - Fetches user profile from Google API
   - Creates/updates user in database
   - Returns JWT token and user data

5. **User is authenticated**
   - Frontend stores token and user data
   - Redirects to dashboard based on role

## OAuth Flow Diagram

```
User → Frontend → Google OAuth → Google (Login) → 
Frontend Callback → Backend API → Database → 
JWT Token → Frontend → Dashboard
```

## Important Notes

- **Development URLs:** Currently configured for localhost
- **Production:** Update redirect URIs in both Google Console and .env files
- **Security:** Never commit `.env` files with real credentials to Git
- **Scopes:** Currently requests email and profile information only

## Troubleshooting

**Error: redirect_uri_mismatch**
- Make sure the redirect URI in Google Console exactly matches your .env file

**Error: invalid_client**
- Check that Client ID and Client Secret are correct in .env files

**Error: access_denied**
- User cancelled the OAuth flow
- Check OAuth consent screen configuration

**Backend connection errors**
- Ensure backend is running on port 5000
- Check VITE_API_URL in Frontend/.env

## Next Steps

1. Get Google OAuth credentials from Google Cloud Console
2. Update both .env files with the credentials
3. Restart both frontend and backend
4. Test the Google Sign In/Sign Up flow
5. (Optional) Style the Google button further if needed

## Additional Features You Can Add

- **Auto-fill email field** after Google OAuth
- **Link Google account** to existing email account
- **Account settings** to manage connected OAuth providers
- **Profile picture sync** from Google account
