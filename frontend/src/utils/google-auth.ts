const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI || 'http://localhost:5174/auth/google/callback';

export const initiateGoogleOAuth = () => {
  const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(GOOGLE_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;
  
  window.location.href = authUrl;
};

export const handleGoogleCallback = async (code: string) => {
  try {
    // Send the code to your backend to exchange for access token
    // The backend will handle the token exchange using the client secret
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/google/callback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      throw new Error('Failed to authenticate with Google');
    }

    const data = await response.json();
    
    // Store the token and user data
    localStorage.setItem('token', data.data.token);
    localStorage.setItem('user', JSON.stringify(data.data.user));
    
    return { success: true, data: data.data };
  } catch (error) {
    console.error('Google OAuth callback error:', error);
    return { success: false, error: 'Authentication failed' };
  }
};

export const fetchGoogleUser = async (accessToken: string) => {
  try {
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch user');
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching Google user:', error);
    return null;
  }
};
