const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI || 'http://localhost:5174/auth/callback';

export const initiateGithubOAuth = () => {
  const scope = 'read:user,repo,read:org';
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(GITHUB_REDIRECT_URI)}&scope=${scope}`;
  
  window.location.href = authUrl;
};

export const handleGithubCallback = async (code: string) => {
  try {
    // In a production app, you would send this code to your backend
    // The backend would exchange it for an access token using the client secret
    // For this demo, we'll simulate the process
    
    // Simulated token (in production, this comes from your backend)
    const mockToken = `ghp_mock_${code}`;
    
    // Store the token
    localStorage.setItem('github_token', mockToken);
    localStorage.setItem('github_authenticated', 'true');
    
    return { success: true, token: mockToken };
  } catch (error) {
    console.error('GitHub OAuth callback error:', error);
    return { success: false, error: 'Authentication failed' };
  }
};

export const fetchGithubUser = async (token: string) => {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch user');
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
};

export const fetchGithubRepos = async (token: string) => {
  try {
    const response = await fetch('https://api.github.com/user/repos?per_page=100&sort=updated', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch repositories');
    
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

export const isAuthenticated = () => {
  return localStorage.getItem('github_authenticated') === 'true';
};

export const logout = () => {
  localStorage.removeItem('github_token');
  localStorage.removeItem('github_authenticated');
  localStorage.removeItem('github_user');
};
